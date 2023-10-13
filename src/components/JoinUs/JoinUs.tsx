import React, { MutableRefObject, memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "../../hooks/useAnimation";
import { animated } from "@react-spring/web";
import styles from "./JoinUs.module.scss";
import containerStyles from "../../Container.module.scss";
import { SectionTitle } from "../../shared/Title/SectionTitle";
import { SubTitle } from "../../shared/SubTitle/SubTitle";
import { Content } from "../../shared/Content/Content";
import { Form } from "../Form/Form";
import { ReactComponent as Arrow } from "../../assets/svg/arrowH.svg";

interface IProps {
  joinUsRef: MutableRefObject<HTMLElement | null>;
}

export const JoinUs = memo(({ joinUsRef }: IProps) => {
  const [joinUs_ref, joinUsInView] = useInView();
  const { scaledProps, scaledApi: joinUsApi } = useAnimation();
  useEffect(() => {
    if (joinUsInView) {
      joinUsApi.start({
        scale: 1,
        delay: 500,
        config: {
          duration: 1000,
        },
      });
    } else {
      joinUsApi.start({  scale: 0 });
    }
  }, [joinUsApi, joinUsInView]);
  return (
    <section ref={joinUsRef} className={styles.joinUs} >
      <div className={styles.add_wrapper} ref={joinUs_ref} >
         <animated.div style={scaledProps} className={`${containerStyles.container}`}>
          <SectionTitle part1={"join us"} part2={"03"} />
          <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
              <SubTitle text="Experience the Power of StarRunner" />
              <Content
                className={styles.content}
                text="Join Our Community and Embark on a Journey of Opportunities. 
        Discover the full range of our services that cater to your needs.
        We've got you covered with top-notch solutions."
              />
              <Arrow className={styles.arrow} />
            </div>
            <Form />
          </div>
        </animated.div>
      </div>
    </section>
  );
});
