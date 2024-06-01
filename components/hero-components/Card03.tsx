import { CardBody, CardContainer, CardItem } from "../magic-ui/3d-card"

import Link from "next/link"

export default function Card_03() {
  // Define theme colors based on custom color palette
  const themeColors = {
    primary: "text-[#cc2b5e]",
    primaryForeground: "text-[#f7f7f7]",
    secondary: "text-[#7d7d7d]",
    background: "bg-[#3a1c71]", // Darker background color
    hoverPrimary: "hover:bg-[#b32452]",
    borderPrimary: "border-[#7d7d7d]"
  };

  // Function to generate random translateZ values
  const randomTranslateZ = () => Math.floor(Math.random() * 100) + 100;

  return (
    <CardContainer className="inter-var">
      <CardBody className={`${themeColors.background} relative group/card ${themeColors.hoverPrimary} dark:${themeColors.hoverPrimary} dark:${themeColors.background} dark:border-${themeColors.borderPrimary}/20 border-${themeColors.borderPrimary}/10 w-[30rem] h-auto rounded-xl p-6 border`}>
        <CardItem className="w-full" translateZ={randomTranslateZ()}>
          <h3>Contact me</h3>
        </CardItem>
        <CardItem className="w-full" translateZ={randomTranslateZ()}>
          <form action="" method="POST">
            <div className="flex flex-col space-y-4">
              <CardItem className="w-full" translateZ={randomTranslateZ()}>
                <input type="text" name="name" placeholder="Your Name" className="p-2 rounded border border-gray-300" required />
              </CardItem>
              <CardItem className="w-full" translateZ={randomTranslateZ()}>
                <input type="email" name="email" placeholder="Your Email" className="p-2 rounded border border-gray-300" required />
              </CardItem>
              <CardItem className="w-full" translateZ={randomTranslateZ()}>
                <textarea name="message" placeholder="Your Message" className="p-2 h-32 rounded border border-gray-300" required></textarea>
              </CardItem>
              <CardItem className="w-full" translateZ={randomTranslateZ()}>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
              </CardItem>
            </div>
          </form>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
