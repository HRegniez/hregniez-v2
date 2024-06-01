import { Avatar, AvatarFallback } from "../ui/avatar"
import { CardBody, CardContainer, CardItem } from "../magic-ui/3d-card"

import Link from "next/link"

export default function Card_01() {
  // Static theme colors
  const themeColors = {
    primary: "bg-blue-500",
    primaryForeground: "text-blue-200",
    secondary: "text-red-500",
    background: "bg-gray-800",
    hoverPrimary: "hover:bg-blue-600",
    hoverSecondary: "hover:text-red-600"
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className={`${themeColors.background} relative group/card ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary} dark:${themeColors.background} dark:border-${themeColors.primary}/20 border-${themeColors.primary}/10 w-[20rem] h-auto rounded-xl p-6 border`}>
        <CardItem
          translateZ="300"
          className={`text-xl w-full my-4 font-bold dark:${themeColors.primaryForeground} flex justify-center items-center`}
        >
          <Avatar className="w-20 h-20">
            <AvatarFallback className={`${themeColors.primaryForeground}`}>
                HR
            </AvatarFallback>
          </Avatar>
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
        <div className="flex flex-col  justify-between items-center mt-4 gap-2">
          <CardItem
            translateZ={200}
            as={Link}
            href="https://github.com/hregniez"
            target="__blank"
            className={`px-4 py-2 w-full text-center rounded-l ${themeColors.primary} dark:${themeColors.primary} dark:text-${themeColors.primaryForeground} text-${themeColors.primaryForeground} text-xs font-bold transition-colors duration-200 ease-in-out ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary}`}
          >
            Github
          </CardItem>
          <CardItem
            translateZ={225}
            as={Link}
            href="https://www.linkedin.com/in/henri-regniez/"
            target="__blank"
            className={`px-4 py-2 w-full text-center rounded-l ${themeColors.primary} dark:${themeColors.primary} dark:text-${themeColors.primaryForeground} text-${themeColors.primaryForeground} text-xs font-bold transition-colors duration-200 ease-in-out ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary}`}
          >
            LinkedIn
          </CardItem>
          <CardItem
            translateZ={250}
            as={Link}
            href="https://www.frontendmentor.io/profile/HRegniez"
            target="__blank"
            className={`px-4 py-2 w-full text-center rounded-l ${themeColors.primary} dark:${themeColors.primary} dark:text-${themeColors.primaryForeground} text-${themeColors.primaryForeground} text-xs font-bold transition-colors duration-200 ease-in-out ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary}`}
          >
            Frontend Mentor
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
