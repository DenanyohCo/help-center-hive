// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = AboutSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Item in *Footer → Pages*
 */
export interface FooterDocumentDataPagesItem {
  /**
   * Link field in *Footer → Pages*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.pages[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Text field in *Footer → Pages*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.pages[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Item in *Footer → Resources*
 */
export interface FooterDocumentDataResourcesItem {
  /**
   * Link field in *Footer → Resources*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.resources[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Text field in *Footer → Resources*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.resources[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Pages field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.pages[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  pages: prismic.GroupField<Simplify<FooterDocumentDataPagesItem>>;

  /**
   * Resources field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.resources[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  resources: prismic.GroupField<Simplify<FooterDocumentDataResourcesItem>>;

  /**
   * Logo Image field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_image: prismic.ImageField<never>;

  /**
   * Logo Text field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logo_text: prismic.KeyTextField;

  /**
   * Logo Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_link: prismic.LinkField;

  /**
   * Twitter Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.twitter_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter_link: prismic.LinkField;

  /**
   * Linkedin Link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.linkedin_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin_link: prismic.LinkField;

  /**
   * Footer Note field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footer_note
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer_note: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomepageDocumentDataSlicesSlice = CardItemsSlice | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Content for Navbar documents
 */
interface NavbarDocumentData {
  /**
   * Logo Link field in *Navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.logo_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_link: prismic.LinkField;

  /**
   * Logo Text field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.logo_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logo_text: prismic.KeyTextField;

  /**
   * Logo Image field in *Navbar*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.logo_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_image: prismic.ImageField<never>;

  /**
   * Buy me a coffee link field in *Navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.buy_me_a_coffee_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buy_me_a_coffee_link: prismic.LinkField;

  /**
   * Buy me a coffee text field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.buy_me_a_coffee_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buy_me_a_coffee_text: prismic.KeyTextField;

  /**
   * Submit a site link field in *Navbar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.submit_a_site_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  submit_a_site_link: prismic.LinkField;

  /**
   * Submit a site text field in *Navbar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.submit_a_site_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  submit_a_site_text: prismic.KeyTextField;
}

/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >;

type PageDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type PrivacyPolicyDocumentDataSlicesSlice = PrivacyPolicySlice;

/**
 * Content for Privacy Policy documents
 */
interface PrivacyPolicyDocumentData {
  /**
   * Slice Zone field in *Privacy Policy*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PrivacyPolicyDocumentDataSlicesSlice> /**
   * Meta Description field in *Privacy Policy*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: privacy_policy.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Privacy Policy*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Privacy Policy*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: privacy_policy.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Privacy Policy document from Prismic
 *
 * - **API ID**: `privacy_policy`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PrivacyPolicyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PrivacyPolicyDocumentData>,
    "privacy_policy",
    Lang
  >;

type WebsiteDocumentDataSlicesSlice = WebsiteSlice;

/**
 * Content for Website documents
 */
interface WebsiteDocumentData {
  /**
   * Slice Zone field in *Website*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: website.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WebsiteDocumentDataSlicesSlice> /**
   * Meta Description field in *Website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: website.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Website*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Website*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: website.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Website document from Prismic
 *
 * - **API ID**: `website`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WebsiteDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<WebsiteDocumentData>,
    "website",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | FooterDocument
  | HomepageDocument
  | NavbarDocument
  | PageDocument
  | PrivacyPolicyDocument
  | WebsiteDocument;

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
  /**
   * Heading field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Subscribers field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.subscribers
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subscribers: prismic.KeyTextField;

  /**
   * Story Title field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.story_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_title: prismic.KeyTextField;

  /**
   * Story Content field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.story_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_content: prismic.KeyTextField;

  /**
   * Team Members field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.team_members
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  team_members: prismic.KeyTextField;

  /**
   * Websites Featured field in *About → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.websites_featured
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  websites_featured: prismic.KeyTextField;

  /**
   * About us Image field in *About → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.default.primary.about_us_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  about_us_image: prismic.ImageField<never>;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<"about", AboutSliceVariation>;

/**
 * Primary content in *CardItems → Items*
 */
export interface CardItemsSliceDefaultItem {
  /**
   * Screenshot field in *CardItems → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  screenshot: prismic.ImageField<never>;

  /**
   * Help Center Link field in *CardItems → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].help_center_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  help_center_link: prismic.LinkField;

  /**
   * Website Page Link field in *CardItems → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_page_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website_page_link: prismic.LinkField;

  /**
   * Website Title field in *CardItems → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  website_title: prismic.KeyTextField;

  /**
   * Website Description field in *CardItems → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  website_description: prismic.RichTextField;

  /**
   * Website Subtitle field in *CardItems → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  website_subtitle: prismic.KeyTextField;
}

/**
 * Card Items Featured variation for CardItems Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardItemsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<CardItemsSliceDefaultItem>
>;

/**
 * Primary content in *CardItems → Items*
 */
export interface CardItemsSliceCardItemsNotFeaturedItem {
  /**
   * Screenshot field in *CardItems → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  screenshot: prismic.ImageField<never>;

  /**
   * Help Center Link field in *CardItems → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].help_center_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  help_center_link: prismic.LinkField;

  /**
   * Website Page Link field in *CardItems → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_page_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website_page_link: prismic.LinkField;

  /**
   * Website Title field in *CardItems → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  website_title: prismic.KeyTextField;

  /**
   * Website Subtitle field in *CardItems → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  website_subtitle: prismic.KeyTextField;

  /**
   * Website Description field in *CardItems → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card_items.items[].website_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  website_description: prismic.RichTextField;
}

/**
 * Card Items Not Featured variation for CardItems Slice
 *
 * - **API ID**: `cardItemsNotFeatured`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardItemsSliceCardItemsNotFeatured = prismic.SharedSliceVariation<
  "cardItemsNotFeatured",
  Record<string, never>,
  Simplify<CardItemsSliceCardItemsNotFeaturedItem>
>;

/**
 * Slice variation for *CardItems*
 */
type CardItemsSliceVariation =
  | CardItemsSliceDefault
  | CardItemsSliceCardItemsNotFeatured;

/**
 * CardItems Shared Slice
 *
 * - **API ID**: `card_items`
 * - **Description**: CardItems
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardItemsSlice = prismic.SharedSlice<
  "card_items",
  CardItemsSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Tag Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].tag_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tag_link: prismic.LinkField;

  /**
   * Tag Name field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].tag_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_name: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *PrivacyPolicy → Default → Primary*
 */
export interface PrivacyPolicySliceDefaultPrimary {
  /**
   * Privacy Policy Heading field in *PrivacyPolicy → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.default.primary.privacy_policy_heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  privacy_policy_heading: prismic.KeyTextField;

  /**
   * Last Updated On field in *PrivacyPolicy → Default → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.default.primary.last_updated_on
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  last_updated_on: prismic.DateField;

  /**
   * Privacy Policy Text field in *PrivacyPolicy → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: privacy_policy.default.primary.privacy_policy_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  privacy_policy_text: prismic.RichTextField;
}

/**
 * Default variation for PrivacyPolicy Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PrivacyPolicySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PrivacyPolicySliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PrivacyPolicy*
 */
type PrivacyPolicySliceVariation = PrivacyPolicySliceDefault;

/**
 * PrivacyPolicy Shared Slice
 *
 * - **API ID**: `privacy_policy`
 * - **Description**: PrivacyPolicy
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PrivacyPolicySlice = prismic.SharedSlice<
  "privacy_policy",
  PrivacyPolicySliceVariation
>;

/**
 * Primary content in *Website → Default → Primary*
 */
export interface WebsiteSliceDefaultPrimary {
  /**
   * Website Description field in *Website → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.default.primary.website_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  website_description: prismic.RichTextField;

  /**
   * Website Title field in *Website → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.default.primary.website_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  website_title: prismic.KeyTextField;

  /**
   * Website Link field in *Website → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: website.default.primary.website_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website_link: prismic.LinkField;

  /**
   * Website Image field in *Website → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.default.primary.website_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  website_image: prismic.ImageField<never>;

  /**
   * Tags field in *Website → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.default.primary.tags
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tags: prismic.KeyTextField;
}

/**
 * Primary content in *Website → Items*
 */
export interface WebsiteSliceDefaultItem {
  /**
   * Page Link field in *Website → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: website.items[].page_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  page_link: prismic.LinkField;

  /**
   * Heading field in *Website → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subheading field in *Website → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: website.items[].subheading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subheading: prismic.KeyTextField;

  /**
   * Image field in *Website → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: website.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Website → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: website.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for Website Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WebsiteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WebsiteSliceDefaultPrimary>,
  Simplify<WebsiteSliceDefaultItem>
>;

/**
 * Slice variation for *Website*
 */
type WebsiteSliceVariation = WebsiteSliceDefault;

/**
 * Website Shared Slice
 *
 * - **API ID**: `website`
 * - **Description**: Website
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WebsiteSlice = prismic.SharedSlice<
  "website",
  WebsiteSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataPagesItem,
      FooterDocumentDataResourcesItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      NavbarDocument,
      NavbarDocumentData,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PrivacyPolicyDocument,
      PrivacyPolicyDocumentData,
      PrivacyPolicyDocumentDataSlicesSlice,
      WebsiteDocument,
      WebsiteDocumentData,
      WebsiteDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutSlice,
      AboutSliceDefaultPrimary,
      AboutSliceVariation,
      AboutSliceDefault,
      CardItemsSlice,
      CardItemsSliceDefaultItem,
      CardItemsSliceCardItemsNotFeaturedItem,
      CardItemsSliceVariation,
      CardItemsSliceDefault,
      CardItemsSliceCardItemsNotFeatured,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      PrivacyPolicySlice,
      PrivacyPolicySliceDefaultPrimary,
      PrivacyPolicySliceVariation,
      PrivacyPolicySliceDefault,
      WebsiteSlice,
      WebsiteSliceDefaultPrimary,
      WebsiteSliceDefaultItem,
      WebsiteSliceVariation,
      WebsiteSliceDefault,
    };
  }
}
