import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "motion/react";
import React, { type JSX } from "react";
import { formatDatePtBR } from "@/lib/formatDatePtBR";

// replace icons with your own if needed
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
export interface CarouselItem {
  id: number;
  icon: string;
  title: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string[];
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Text Animations",
    description: ["Cool text animations for your projects."],
    id: 1,
    icon: "",

    role: "",
    startDate: new Date(),
    endDate: undefined,
  },
  {
    title: "Animations",
    description: ["Smooth animations for your projects."],
    id: 2,
    icon: "",

    role: "",
    startDate: new Date(),
    endDate: undefined,
  },
  {
    title: "Components",
    description: ["Reusable components for your projects."],
    id: 3,
    icon: "",

    role: "",
    startDate: new Date(),
    endDate: undefined,
  },
  {
    title: "Backgrounds",
    description: ["Beautiful backgrounds and patterns for your projects."],
    id: 4,
    icon: "",

    role: "",
    startDate: new Date(),
    endDate: undefined,
  },
  {
    title: "Common UI",
    description: ["Common UI components are coming soon!"],
    id: 5,
    icon: "",

    role: "",
    startDate: new Date(),
    endDate: undefined,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({
  item,
  index,
  itemWidth,
  round,
  trackItemOffset,
  x,
  transition,
}: CarouselItemProps) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`relative flex shrink-0 flex-col ${
        round
          ? "items-center justify-center border-0 bg-[#060010] text-center"
          : "items-start justify-between rounded-[12px] border border-[#222] bg-[#222]"
      } cursor-grab overflow-hidden active:cursor-grabbing`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : "100%",
        rotateY: rotateY,
        ...(round && { borderRadius: "50%" }),
      }}
      transition={transition}
    >
      <div
        className={`${round ? "m-0 p-0" : "flex w-full justify-center bg-mist-200 p-8"}`}
      >
        <span className="flex items-center justify-center">
          <img src={item.icon} className="h-24" />
        </span>
      </div>
      <div className="w-full p-5">
        <div className="mb-0 flex flex-col gap-2 py-2 text-center text-4xl font-black">
          <h2>{item.title}</h2>
          <div className="flex w-full justify-center text-lg font-normal">
            <p>{`${formatDatePtBR(item.startDate)} – ${item.endDate ? formatDatePtBR(item.endDate) : "presente"}`}</p>
          </div>
          <p className="text- text-2xl font-normal text-mist-300">
            {item.role}
          </p>
        </div>
        <ul className="flex flex-col gap-2 text-lg">
          {item.description.map((desc, index) => (
            <li key={index} className="list-inside list-disc">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full border border-white"
          : "rounded-[24px] border border-[#222]"
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` }),
      }}
    >
      <motion.div
        className="flex"
        drag={isAnimating ? false : "x"}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div
        className={`flex w-full justify-center ${round ? "absolute bottom-12 left-1/2 z-20 -translate-x-1/2" : ""}`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150 ${
                activeIndex === index
                  ? round
                    ? "bg-white"
                    : "bg-white"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.6)]"
              }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
