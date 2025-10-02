// import React, { useCallback, useEffect, useRef } from 'react'

// import '../../styles/mobileslider.css'
// import testImage from '../../assets/img/sample.webp'
// import { MdOutlineArrowOutward } from "react-icons/md";

// import type {
//   EmblaCarouselType,
//   EmblaEventType,
//   EmblaOptionsType
// } from 'embla-carousel'
// import useEmblaCarousel from 'embla-carousel-react'

// const TWEEN_FACTOR_BASE = 0.52

// const numberWithinRange = (number: number, min: number, max: number): number =>
//   Math.min(Math.max(number, min), max)

// type PropType = {
//   options?: EmblaOptionsType
// }

// const EmblaCarousel: React.FC<PropType> = (props) => {
//   const { options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)
//   const tweenFactor = useRef(0)
//   const tweenNodes = useRef<HTMLElement[]>([])

//    const SLIDES = [
//         {image:testImage},
//         {image:testImage},
//         {image:testImage},
//         {image:testImage},
//         {image:testImage},
//         {image:testImage},
//     ]

//   // const {
//   //   prevBtnDisabled,
//   //   nextBtnDisabled,
//   //   onPrevButtonClick,
//   //   onNextButtonClick
//   // } = usePrevNextButtons(emblaApi)

//   const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
//     tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
//       return slideNode.querySelector('.embla__slide__number') as HTMLElement
//     })
//   }, [])

//   const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
//     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
//   }, [])

//   const tweenScale = useCallback(
//     (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
//       const engine = emblaApi.internalEngine()
//       const scrollProgress = emblaApi.scrollProgress()
//       const slidesInView = emblaApi.slidesInView()
//       const isScrollEvent = eventName === 'scroll'

//       emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
//         let diffToTarget = scrollSnap - scrollProgress
//         const slidesInSnap = engine.slideRegistry[snapIndex]

//         slidesInSnap.forEach((slideIndex) => {
//           if (isScrollEvent && !slidesInView.includes(slideIndex)) return

//           if (engine.options.loop) {
//             engine.slideLooper.loopPoints.forEach((loopItem) => {
//               const target = loopItem.target()

//               if (slideIndex === loopItem.index && target !== 0) {
//                 const sign = Math.sign(target)

//                 if (sign === -1) {
//                   diffToTarget = scrollSnap - (1 + scrollProgress)
//                 }
//                 if (sign === 1) {
//                   diffToTarget = scrollSnap + (1 - scrollProgress)
//                 }
//               }
//             })
//           }

//           const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
//           const scale = numberWithinRange(tweenValue, 0, 1).toString()
//           const tweenNode = tweenNodes.current[slideIndex]
//           tweenNode.style.transform = `scale(${scale})`
//         })
//       })
//     },
//     []
//   )

//   useEffect(() => {
//     if (!emblaApi) return

//     setTweenNodes(emblaApi)
//     setTweenFactor(emblaApi)
//     tweenScale(emblaApi)

//     emblaApi
//       .on('reInit', setTweenNodes)
//       .on('reInit', setTweenFactor)
//       .on('reInit', tweenScale)
//       .on('scroll', tweenScale)
//       .on('slideFocus', tweenScale)
//   }, [emblaApi, tweenScale])

//   return (
//     <div className="embla h-full">
//       <div className="embla__viewport h-full" ref={emblaRef}>
//         <div className="embla__container h-full">
//           {SLIDES.map((pro, index) => (
//             <div className="embla__slide flex items-center justify-center" key={index}>
//               <div className="embla__slide__number bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col">
//                 <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg'>
//                   <img src={pro.image} alt="" className='h-40 object-cover rounded-2xl'/>
                  
//                 </div>

//                 <MdOutlineArrowOutward style={{width: "25px", height: "25px"}} className="text-white bg-white/10 backdrop-blur-lg rounded-full p-1 mt-2 w-10 h-10"/>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div> 

//          <div className="embla__dots">
//           {scrollSnaps.map((_: any, index: any) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={'embla__dot'.concat(
//                 index === selectedIndex ? ' embla__dot--selected' : ''
//               )}
//             />
//           ))}
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default EmblaCarousel


import React, { useCallback, useEffect, useRef } from 'react'

import '../../styles/mobileslider.css'
import Regency from "../../assets/img/herohome/regency.webp";
import Winchester from "../../assets/img/herohome/winchester.webp";
import TestProject3 from "../../assets/img/herohome/test-project1.webp";
import TestProject4 from "../../assets/img/herohome/test-project4.png";
import TestProject5 from "../../assets/img/herohome/test-project2.webp";
import TestProject6 from "../../assets/img/herohome/test-project3.webp";
import { MdOutlineArrowOutward } from "react-icons/md";

import type {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'   // ✅ Import plugin

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

type PropType = {
  options?: EmblaOptionsType
}

const MobileSlider: React.FC<PropType> = (props) => {
  // ✅ Add loop: true for infinity
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...options }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })] // autoplay every 3s
  )

  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const SLIDES = [
    { image: Regency },
    { image: Winchester },
    { image: TestProject3 },
    { image: TestProject4 },
    { image: TestProject5 },
    { image: TestProject6 },
  ]

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const scale = numberWithinRange(tweenValue, 0, 1).toString()
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `scale(${scale})`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  return (
    <div className="embla h-full">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {SLIDES.map((pro, index) => (
            <div className="embla__slide flex items-center justify-center" key={index}>
              <div className="embla__slide__number flex flex-col">
                <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-2'>
                  <img src={pro.image} alt="" className='h-40 object-cover rounded-2xl'/>
                </div>
                <MdOutlineArrowOutward
                  style={{ width: "25px", height: "25px" }}
                  className="text-white bg-white/10 backdrop-blur-lg rounded-full p-1 mt-2 w-10 h-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileSlider
