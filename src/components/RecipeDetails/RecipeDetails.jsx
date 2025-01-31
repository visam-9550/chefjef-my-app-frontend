import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton
} from "react-share";
import {
  RecipeDetailsContainer,
  RecipeDetailsTopContainer,
  RecipeDetailsTopDescrationContainer,
  RecipeImage,
  RecipeTitle,
  RecipeDuration,
  RecipeIngredients,
  Span,
  HRLine,
  RecipeDetailsTopProcessContainer,
  ProcessHeading,
  Process,
} from "./styledComponents";

import React from "react";

function RecipeDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(`https://chefjef-backend.onrender.com/getRecipe/${id}`);
        if (!resp.ok) throw new Error("Failed to fetch recipe");
        const result = await resp.json();
        setData(result.recipe);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeData();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading recipe. Please try again.</h2>;
  if (!data) return <h2>No recipe found.</h2>;

  const pageUrl = window.location.href;

  // 🟢 Custom message for WhatsApp & Twitter
  const shareMessage = `🍽️ *${data.title} Recipe* 🍽️\n\n`
    + `🕒 Time: ${data.time} minutes\n`
    + `🛒 Ingredients: ${data.ingredients}\n`
    + `👨‍🍳 Preparation: ${data.process}\n\n`
    + `🔗 Full recipe: ${pageUrl}`;

  // ✅ Web Share API for Mobile Sharing
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.title} Recipe`,
          text: `Try this delicious ${data.title} recipe!`,
          url: pageUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Your browser does not support Web Share API.");
    }
  };

  return (
    <RecipeDetailsContainer>
      <RecipeDetailsTopContainer>
        <RecipeImage src={data.image} alt={data.title} />
        <RecipeDetailsTopDescrationContainer>
          <RecipeTitle>{data.title} Recipe Details</RecipeTitle>
          <RecipeDuration>
            <Span>Time: </Span>
            {data.time} minutes
          </RecipeDuration>
          <RecipeIngredients>
            <Span>Ingredients: </Span>
            {data.ingredients}
          </RecipeIngredients>

          {/* Social Media Sharing Buttons */}
          <div className="flex gap-3 mt-3">
            {/* <TwitterShareButton url={pageUrl} title={shareMessage}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton url={pageUrl} title={shareMessage} separator="\n\n">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            {/* Facebook & LinkedIn - Only Share URL (OG Meta Tags will handle details) */}
            {/* <LinkedinShareButton url={pageUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <FacebookShareButton url={pageUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>  */}

            {/* Web Share API Button */}
            <button onClick={handleNativeShare} className="p-2 bg-blue-500 text-white rounded">
              Share via Device
            </button>
          </div>
        </RecipeDetailsTopDescrationContainer>
      </RecipeDetailsTopContainer>
      <HRLine />
      <RecipeDetailsTopProcessContainer>
        <ProcessHeading>Preparation Process</ProcessHeading>
        <Process>{data.process}</Process>
      </RecipeDetailsTopProcessContainer>
    </RecipeDetailsContainer>
  );
}

export default RecipeDetails;
