/**
 * Tailwind CSS integration with JSX
 * This provides utilities to use Tailwind classes in JSX components
 */

import { tw } from './tailwind';

/**
 * JSX Props interface with Tailwind class support
 */
export interface TailwindProps {
  className?: string;
  style?: Record<string, any>;
  [key: string]: any;
}

/**
 * Process JSX props to apply Tailwind classes
 * This function takes JSX props with className and converts Tailwind classes to inline styles
 * 
 * @param props - JSX props with optional className and style
 * @returns Modified props with Tailwind styles applied to the style object
 */
export function processTailwindProps(props: TailwindProps): TailwindProps {
  if (!props || !props.className) {
    return props;
  }

  const { className, style = {}, ...rest } = props;
  const tailwindStyles = tw(className);
  
  // Merge Tailwind styles with existing style prop
  const mergedStyles = {
    ...tailwindStyles,
    ...style
  };

  return {
    ...rest,
    style: mergedStyles
  };
}

/**
 * Higher-order component that wraps a component with Tailwind support
 * 
 * @param Component - The component to wrap
 * @returns A new component with Tailwind support
 */
export function withTailwind<P extends TailwindProps>(
  Component: (props: P) => any
): (props: P) => any {
  return (props: P) => {
    const processedProps = processTailwindProps(props) as P;
    return Component(processedProps);
  };
}

/**
 * Create a Tailwind-enabled JSX element factory
 * This can be used to create elements with Tailwind support
 * 
 * @param createElement - The original createElement function
 * @returns A new createElement function with Tailwind support
 */
export function createTailwindElementFactory(
  createElement: (type: any, props: any, ...children: any[]) => any
): (type: any, props: any, ...children: any[]) => any {
  return (type: any, props: any, ...children: any[]) => {
    const processedProps = props ? processTailwindProps(props) : props;
    return createElement(type, processedProps, ...children);
  };
}
