import { Avatar, AvatarFallback } from "../ui/avatar"
import { CardBody, CardContainer, CardItem } from "../magic-ui/3d-card"

import Link from "next/link"

export default function card_02() {
  return (
<CardContainer className="inter-var">
      <CardBody className="bg-background relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/10 dark:bg-background dark:border-primary/20 border-primary/10 w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          as="p"
          translateZ="300"
          className="text-xl w-full my-4 font-bold text-primary dark:text-primary-foreground flex justify-center items-center"
        >
          FAQs
        </CardItem>
        <CardItem
          as="p"
          translateZ="250"
          className="text-primary-foreground text-xl max-w-sm mt-2 text-center w-full dark:text-primary-foreground flex justify-center items-center font-bold"
        >
          Henri regniez
        </CardItem>
        <CardItem
          as="p"
          translateZ="200"
          className="text-secondary text-sm max-w-sm mt-1 text-center w-full dark:text-secondary flex justify-center items-center"
        >
          Grenoble, France
        </CardItem>
        <CardItem
          as="p"
          translateZ="230"
          className="text-primary-foreground text-sm max-w-sm mt-4 text-center w-full dark:text-primary-foreground flex justify-center items-center"
        >
          "Web Developer and avid learner"
        </CardItem>
        {/* <CardItem translateZ="100" className="w-full mt-4">
          
        </CardItem> */}
        <div className="flex flex-col justify-between items-center mt-4 gap-2">
          <CardItem
            translateZ={200}
            as={Link}
            href="https://github.com/hregniez"
            target="__blank"
            className="px-4 py-2 w-full text-center rounded-l bg-primary-foreground dark:bg-primary-foreground dark:text-background text-background text-xs font-bold transition-colors duration-200 ease-in-out hover:bg-primary-foreground/90 dark:hover:bg-primary-foreground/80"
          >
            Github
          </CardItem>
          <CardItem
            translateZ={225}
            as={Link}
            href="https://www.linkedin.com/in/henri-regniez/"
            target="__blank"
            className="px-4 py-2 w-full text-center rounded-l bg-primary-foreground dark:bg-primary-foreground dark:text-background text-background text-xs font-bold transition-colors duration-200 ease-in-out hover:bg-primary-foreground/90 dark:hover:bg-primary-foreground/80"
          >
            LinkedIn
          </CardItem>
          <CardItem
            translateZ={250}
            as={Link}
            href="https://www.frontendmentor.io/profile/HRegniez"
            target="__blank"
            className="px-4 py-2 w-full text-center rounded-l bg-primary-foreground dark:bg-primary-foreground dark:text-background text-background text-xs font-bold transition-colors duration-200 ease-in-out hover:bg-primary-foreground/90 dark:hover:bg-primary-foreground/80"
          >
            Frontend Mentor
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
