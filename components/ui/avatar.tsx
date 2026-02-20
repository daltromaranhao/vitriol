import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  online?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  size = "md",
  online,
  className,
  ...props
}) => {
  const initials = fallback || alt?.slice(0, 2).toUpperCase() || "??";

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-muted overflow-hidden",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-muted-foreground">{initials}</span>
      )}
      {online !== undefined && (
        <span
          className={cn(
            "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background",
            online ? "bg-green-500" : "bg-gray-400"
          )}
        />
      )}
    </div>
  );
};
