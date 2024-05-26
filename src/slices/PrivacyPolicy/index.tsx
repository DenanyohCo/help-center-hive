import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PrivacyPolicy`.
 */
export type PrivacyPolicyProps =
  SliceComponentProps<Content.PrivacyPolicySlice>;

/**
 * Component for "PrivacyPolicy" Slices.
 */
const PrivacyPolicy = ({ slice }: PrivacyPolicyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container py-12 my-4"
    >
      <div className="container bg-[#FFFFFF] m-4">
        <div className="my-4">
          <div className="text-6xl py-4 font-bold">{slice.primary.privacy_policy_heading}</div>
          <div className="text-lg">Last updated on {slice.primary.last_updated_on}</div>
        </div>
        <PrismicRichText field={slice.primary.privacy_policy_text} />
      </div>
    </section >
  );
};

export default PrivacyPolicy;
