import React from 'react'
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx'
import { OurMissionContainer,
  OurMissionTopContainer,
        OurMissionHeading,
        OurMissionLogoImage, 
        OurMissionDescription,
        HRLine,
        OurMissionCardContainersHeading,
        OurMissionCardContainer,
        CardContainer1, 
        CardContainer2, 
        CardContainer3, 
        CardContainer4, 
        CardContainerImage, 
        CardContainerTitle  
} from './styledComponents.jsx';
function OurMission() {
  return (
    <>
    <OurMissionContainer>
      <Header />
        <OurMissionTopContainer>
        <OurMissionHeading>Our Mission</OurMissionHeading>
        <OurMissionLogoImage src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1738122620/chefjef-removebg-preview_pbmfjz.png" />
        <OurMissionDescription>
            At Chefjef, our mission is to bring together a community of passionate food lovers by creating a space where culinary inspiration thrives.
        </OurMissionDescription>
        </OurMissionTopContainer>
        <HRLine />
        <OurMissionCardContainersHeading>We aim to empower you to</OurMissionCardContainersHeading>
        <OurMissionCardContainer>
          <CardContainer1>
            <CardContainerImage src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1736612171/Gemini_Generated_Image_9jzmk79jzmk79jzm_yleqqm.jpg" />
            <CardContainerTitle>Discover and Share Recipes</CardContainerTitle>
            
          </CardContainer1>
          <CardContainer2>
            <CardContainerImage src = "https://res.cloudinary.com/dpeqiwvxt/image/upload/v1736612558/Personalize_Your_Experience_image_yyz6r5.png" />
            <CardContainerTitle>Personalize Your Experience</CardContainerTitle>
             
          </CardContainer2>
          <CardContainer3>
          <CardContainerImage src = "https://files.oaiusercontent.com/file-8r6L6YR8KHW2cCyPmn1iRh?se=2025-01-11T16%3A29%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D718cfbc7-3cda-4676-8db8-8eba6ce0ec5a.webp&sig=MoWJbLYcYyrLbe78Kq9T8ZAvat7M0jKuCt9qf77dr6M%3D" />
            <CardContainerTitle>Connect Through Food</CardContainerTitle>
            
          </CardContainer3>
          <CardContainer4>
          <CardContainerImage src = "https://static.vecteezy.com/system/resources/previews/012/335/181/non_2x/mobile-shopping-concept-a-man-and-a-woman-buy-things-in-the-online-store-through-a-big-smartphone-e-commerce-and-online-shopping-illustration-in-flat-style-vector.jpg" />
            <CardContainerTitle>Simplicity and Convenience</CardContainerTitle>
            
          </CardContainer4>
        </OurMissionCardContainer>
        
    </OurMissionContainer>
    <Footer />
    </>
  )
}

export default OurMission;