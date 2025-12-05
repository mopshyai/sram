import { ReactNode } from "react";
import { RefreshCw } from "lucide-react";
import { usePullToRefresh } from "@/hooks/use-pull-to-refresh";
import { cn } from "@/lib/utils";

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void> | void;
  className?: string;
  threshold?: number;
  disabled?: boolean;
}

export function PullToRefresh({
  children,
  onRefresh,
  className,
  threshold = 80,
  disabled = false,
}: PullToRefreshProps) {
  const {
    containerRef,
    pullDistance,
    isRefreshing,
    progress,
    shouldTrigger,
  } = usePullToRefresh({
    onRefresh: disabled ? async () => {} : onRefresh,
    threshold,
  });

  return (
    <div ref={containerRef} className={cn("relative touch-pan-y", className)}>
      {/* Pull indicator - only visible on mobile */}
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center transition-opacity duration-200 md:hidden",
          pullDistance > 0 || isRefreshing ? "opacity-100" : "opacity-0"
        )}
        style={{
          top: Math.max(pullDistance - 50, -50),
          transform: `translateX(-50%) translateY(${pullDistance > 0 ? 0 : -20}px)`,
        }}
      >
        <div
          className={cn(
            "w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-primary/20",
            shouldTrigger && "bg-primary/20"
          )}
        >
          <RefreshCw
            className={cn(
              "w-5 h-5 text-primary transition-transform duration-200",
              isRefreshing && "animate-spin",
              !isRefreshing && shouldTrigger && "text-primary"
            )}
            style={{
              transform: isRefreshing
                ? undefined
                : `rotate(${(progress / 100) * 360}deg)`,
            }}
          />
        </div>
      </div>

      {/* Content with pull transform */}
      <div
        className="transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(${pullDistance}px)`,
          transition: pullDistance === 0 && !isRefreshing ? "transform 0.3s ease-out" : "none",
        }}
      >
        {children}
      </div>

      {/* Pull hint text */}
      {pullDistance > 20 && !isRefreshing && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-medium md:hidden"
          style={{ top: pullDistance - 20 }}
        >
          {shouldTrigger ? "Release to refresh" : "Pull to refresh"}
        </div>
      )}
    </div>
  );
}
