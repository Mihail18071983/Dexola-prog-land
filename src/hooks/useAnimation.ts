import { useSpring } from "@react-spring/web";

export const useAnimation = () => {
 const [props, api] = useSpring(
    () => ({
      delay: 500,
      initial: { transform: "translateX(100%)", scale:0 },
      from: { transform: "translateX(100%)", scale: 0 },
    }),
    []
  ); 
   const [scaledProps, scaledApi] = useSpring(
    () => ({
      delay: 500,
      initial: { scale:0 },
      from: {  scale: 0 },
    }),
    []
  ); 
  return {props, api, scaledProps, scaledApi};  
}
