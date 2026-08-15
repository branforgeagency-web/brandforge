import React from "react";
import RiftStageHero from "./RiftStageHero";

export default function BrandForgeBannerSection({ onOpenModal }) {
  return (
    <div id="banner-section" className="bf-banner-wrapper">
      <RiftStageHero embedded={false} />
    </div>
  );
}
