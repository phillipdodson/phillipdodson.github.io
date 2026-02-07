---
layout: portfolio-single
title: Website that showcases and unifies cancer training material
require_password: false

feed:
  label: Cancer resources hub
  image: cancer-training-na-feed.jpg

hero:
  image_file: cancer-training-na-featured.svg
  gradient_c1: '#033C5A'
  gradient_c2: '#005C8C'
  gradient_angle: 140deg

client: George Washington (GW) University Cancer Center Training & Technical Assistance Program
challenge: Create a central hub that brings together cancer training materials and resources authored by both GW Cancer Center and partners.
solution: Reorganize internal resources using users’ search behaviors and surface relevant content from external partners through unified search results.
result: A WordPress website featuring unified search across internal resources and partner content, integrated using Google Programmable Search Engine (PSE).

modules:
  - type: portfolio-image
    data:
      filename: cancer-training-na-screenshots-1.jpg
      alt: screenshots of the website on various devices
      width: 2000
      height: 1128
      caption:
  - type: portfolio-callout
    data:
      heading: Content migration from Drupal to WordPress
      content: '<p>Over 600 pieces of content were exported to the new WordPress website. Moving platforms allowed me to add functionality like a customized search engine, page templates, and auto-generating tables of content.</p>

        <p>The decision to change platforms wasn’t made lightly, but ultimately their original website was inflexible because it was connected to the university network.</p>'
  - type: portfolio-callout
    data:
      heading: Revamped information architecture (IA) for clear navigation
      content: '<p>The platform featured a new organizational structure and taxonomy based on cancer topics, cancer types, and resource types such as webinars, trainings, toolkits, and newsletters. I also added a new taxonomy for tagging articles that were based on the Centers for Disease Control and Prevention (CDC) priorities, who provided funding for the program.</p>

      <p>The content on the original Drupal website was based on the client’s best attempt at organization but resulted in unclear user flows and duplicated content as they had little guidance.</p>'
  - type: portfolio-image
    data:
      filename: cancer-training-na-google-pse-1536x629.png
      alt: internal and external search results
      width: 1536
      height: 629
      caption: Search results included GW Cancer Center and a curated list of partner websites.
  - type: portfolio-callout
    data:
      heading: Accessible and discoverable
      content: '<p>The website followed accessibility best practices and met Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards. To improve content discoverability, multiple taxonomies were applied based on common user contexts, such as CDC priorities and cancer topics. The goal was to ensure users could find what they needed regardless of how or why they arrived on the site.</p>'
  - type: portfolio-callout
    data:
      heading: On-site search included local and external content
      content: '<p>Google Programmable Search Engine (PSE) powered on-site search, delivering a unified set of results that combined the client’s internal content with external resources hosted on partner websites. All results appeared together in a single interface on the platform and search refinements were enabled so users could limit Google results to be only from the client or only from partners. Over 40 websites were whitelisted within the PSE dashboard to allow curation of partner results.</p>

      <p>During the IA phase, a review of content exported from Drupal revealed an inefficient pattern: partner resources were being manually added as posts with excerpts linking out to external sites. This was the client’s solution to having partner content included on their website. This approach required ongoing maintenance and often resulted in broken or outdated links when updates weren’t tracked.</p>

      <p>An initial iteration used Algolia to power search for internal WordPress content and Google PSE for external content, with results separated into tabs. This approach proved ineffective, as users consistently favored the default internal tab and frequently overlooked partner content.</p>'
  - type: portfolio-images-2col
    data:
      images:
        - filename: cancer-training-na-search.png
          alt: screenshot of search results page that contains listings from all partners
          width: 1000
          height: 1000
          caption: Screenshot of the unified search results page. Below the query box, the selected refinement show results from all partners.
        - filename: cancer-training-na-topics.jpg
          alt: screenshot of tags for resource topics, cancer types, and resource types
          width: 1000
          height: 1000
          caption: A comprehensive taxonomy organized resources by various tags that speak to user’s contexts for arriving at the site.
  - type: portfolio-callout
    data:
      heading: Migrating to custom WordPress blocks
      content: '<p>I converted legacy interactive widgets such as tabs and accordions into bespoke WordPress blocks which allowed for a seamless author experience.</p>

      <p>Imported interactive components were broken in WordPress because those components were part of the Drupal theme. When viewed in the Block editor after import, WordPress converted them into HTML blocks, so even if I bootstrapped the original JavaScript from Drupal, having to edit an accordion from plain HTML wouldn’t have been feasible for the client.</p>'
  - type: portfolio-callout
    data:
      heading: Toolkits and longform content
      content: '<p>Toolkits were their cornerstone content so we worked together to rethink how they were presented. Renamed Social Media Awareness Toolkits, each one focused on a specific cancer-related topic.</p>

      <p>After several weeks of iterating on wireframes, we landed on a consistent structure for every toolkit. Each page brought together background information, data and statistics, communication best practices, external resources, and downloadable social media copy and graphics. The content was organized to give a clear overview of the topic, with accordions used to reduce scrolling and group related sections. A table of contents was automatically generated from the page headings to support easy in-page navigation.</p>'
---
