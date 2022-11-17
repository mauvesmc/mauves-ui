import {
  Component,
  createSignal,
  mergeProps,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import { Props } from "../../types";
import { Box, BoxPaddingProps } from "../Box";
import styles from "./index.module.scss";

export type BottomSheetProps = Props<"div"> &
  BoxPaddingProps & {
    modal?: boolean;
    onClose?: () => void;
    pxToRemove?: number;
  };

const getYFromEvent = (e: MouseEvent | TouchEvent) => {
  if ("touches" in e) {
    return e.touches[0].clientY;
  } else {
    return e.clientY;
  }
};

const startListening = (
  e: MouseEvent | TouchEvent,
  onGrabbing: (e?: Event) => void,
  onEndGrabbing: (e?: Event) => void
) => {
  if ("touches" in e) {
    document.addEventListener("touchend", onEndGrabbing);
    document.addEventListener("touchmove", onGrabbing);
  } else {
    document.addEventListener("mouseup", onEndGrabbing);
    document.addEventListener("mousemove", onGrabbing);
  }
};

const endListening = (
  e: MouseEvent | TouchEvent,
  onGrabbing: (e?: Event) => void,
  onEndGrabbing: (e?: Event) => void
) => {
  if ("touches" in e) {
    document.removeEventListener("touchend", onEndGrabbing);
    document.removeEventListener("touchmove", onGrabbing);
  } else {
    document.removeEventListener("mouseup", onEndGrabbing);
    document.removeEventListener("mousemove", onGrabbing);
  }
};

export const BottomSheet: Component<BottomSheetProps> = (rawProps) => {
  const mergedProps = mergeProps({ modal: false, pxToRemove: 96 }, rawProps);
  const [boxPaddingProps, anotherProps] = splitProps(mergedProps, [
    "p",
    "px",
    "py",
    "pt",
    "pl",
    "pr",
    "pb",
  ]);
  const [props, rest] = splitProps(anotherProps, [
    "modal",
    "classList",
    "onClose",
    "children",
    "pxToRemove",
  ]);
  const [isGrabbing, setIsGrabbing] = createSignal(false);
  const [containerRef, setContainerRef] = createSignal<HTMLElement | null>(
    null
  );

  const onStartGrabbing = (e: MouseEvent | TouchEvent) => {
    if (!containerRef()) return;
    setIsGrabbing(true);
    const initialY = getYFromEvent(e);

    const onGrabbing = (ev: MouseEvent | TouchEvent) => {
      const clientY = getYFromEvent(ev);
      let result = clientY - initialY;
      if (clientY < initialY) result = 0;
      containerRef().style.transform = `translateY(${result}px)`;
      if (Math.abs(result) > props.pxToRemove) props.onClose?.();
    };

    const onEndGrabbing = () => {
      containerRef().style.transform = "translateY(0px)";
      setIsGrabbing(false);

      endListening(e, onGrabbing, onEndGrabbing);
    };

    startListening(e, onGrabbing, onEndGrabbing);

    onCleanup(() => {
      endListening(e, onGrabbing, onEndGrabbing);
    });
  };

  return (
    <Box class={styles["bottom-sheet"]} onClick={props.onClose}>
      <Show when={props.modal}>
        <Box class={styles["bottom-sheet__scrim"]} />
      </Show>
      <Box
        {...boxPaddingProps}
        {...rest}
        classList={{
          [styles["bottom-sheet__container"]]: true,
          ...props.classList,
        }}
        onMouseDown={(e) => e.stopPropagation()}
        ref={setContainerRef}
      >
        <Box
          classList={{
            [styles["bottom-sheet__drag-handle"]]: true,
            [styles["bottom-sheet__drag-handle_grabbing"]]: isGrabbing(),
          }}
          onMouseDown={onStartGrabbing}
          onTouchStart={onStartGrabbing}
        />
        <Box class={styles["bottom-sheet__content"]}>{props.children}</Box>
      </Box>
    </Box>
  );
};
