import { Avatar, AvatarFallback } from "../ui/avatar"
import { CardBody, CardContainer, CardItem } from "../magic-ui/3d-card"

import Link from "next/link"

export default function Card_05() {
  // Define theme colors based on custom color palette
  const themeColors = {
    primary: "text-[#cc2b5e]",
    primaryForeground: "text-[#f7f7f7]",
    secondary: "text-[#7d7d7d]",
    background: "bg-[#3a1c71]", // Darker background color
    hoverPrimary: "hover:bg-[#b32452]",
    borderPrimary: "border-[#7d7d7d]"
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className={`${themeColors.background} relative group/card ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary} dark:${themeColors.background} dark:border-${themeColors.borderPrimary}/20 border-${themeColors.borderPrimary}/10 w-[30rem] h-auto rounded-xl p-6 border`}>
        <CardItem
          as="p"
          translateZ="300"
          className={`text-xl w-full my-4 font-bold ${themeColors.primary} dark:${themeColors.primaryForeground} flex justify-center items-center`}
        >
          FAQs
        </CardItem>
        <CardItem
          as="p"
          translateZ="250"
          className={`${themeColors.primaryForeground} text-xl max-w-sm mt-2 text-center w-full dark:${themeColors.primaryForeground} flex justify-center items-center font-bold`}
        >
          Henri regniez
        </CardItem>
        <CardItem
          as="p"
          translateZ="200"
          className={`${themeColors.secondary} text-sm max-w-sm mt-1 text-center w-full dark:${themeColors.secondary} flex justify-center items-center`}
        >
          Grenoble, France
        </CardItem>
        <CardItem
          as="p"
          translateZ="230"
          className={`${themeColors.primaryForeground} text-sm max-w-sm mt-4 text-center w-full dark:${themeColors.primaryForeground} flex justify-center items-center`}
        >
          "Web Developer and avid learner"
        </CardItem>
        <div className="flex flex-col justify-between items-center mt-4 gap-2">
          <CardItem
            translateZ={200}
            as={Link}
            href="https://github.com/hregniez"
            target="__blank"
            className={`px-4 py-2 w-full text-center rounded-l ${themeColors.background} dark:${themeColors.background} dark:${themeColors.primaryForeground} ${themeColors.primaryForeground} text-xs font-bold transition-colors duration-200 ease-in-out ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary}`}
          >
            Github
          </CardItem>
          <CardItem
            translateZ={225}
            as={Link}
            href="https://www.linkedin.com/in/henri-regniez/"
            target="__blank"
            className={`px-4 py-2 w-full text-center rounded-l ${themeColors.background} dark:${themeColors.background} dark:${themeColors.primaryForeground} ${themeColors.primaryForeground} text-xs font-bold transition-colors duration-200 ease-in-out ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary}`}
          >
            LinkedIn
          </CardItem>
          <CardItem
            translateZ={250}
            as={Link}
            href="https://www.frontendmentor.io/profile/HRegniez"
            target="__blank"
            className={`px-4 py-2 w-full text-center rounded-l ${themeColors.background} dark:${themeColors.background} dark:${themeColors.primaryForeground} ${themeColors.primaryForeground} text-xs font-bold transition-colors duration-200 ease-in-out ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary}`}
          >
            Frontend Mentor
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
