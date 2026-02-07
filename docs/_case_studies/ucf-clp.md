---
layout: portfolio-single
title: Research study platform for HIV education and prevention
require_password: true

feed:
  label: Online intervention platform
  image: hiv-prevention-na-feed.jpg

hero:
  image_file: hiv-prevention-na-featured.png
  gradient_c1: '#158472'
  gradient_c2: '#1D584E'
  gradient_angle: 140deg

client: College of Medicine, University of Central Florida
challenge: Reimagine an in-person, couples-based HIV-prevention intervention as a fun and interactive online that's not being guided by a facilitator.
solution: Collaborate with researchers to design a digital user experience that keeps participants engaged while not compromising the scientific validity of the research study.
result: Online platform using WordPress that allows participants to complete fun and interactive activites on any web-capable device in English or Spanish.

modules:
  - type: portfolio-image
    data:
      filename: hiv-prevention-na-home.jpg
      alt: screenshot of the recruiting home page asking for hispanic, latino, or afro-latino male gay couples
      width: 2000
      height: 1128
      caption:
  - type: portfolio-callout
    data:
      heading: Moving from an in-person to online modality
      content: '<p>The final experience had participants logging into the platform for three, hour’ish-long sessions in which the experience was informed from the results of multiple iterations of user flows and wireframes.</p>

        <p>A direct conversion of in-person study sessions wasn’t possible. Initially, I mapped the physical study materials to a one-to-one flow, treating each point of interaction as a single page on the platform. The large number of pages made it clear the experience needed to be streamlined, especially after activity introductions and follow-ups were accounted for. Sessions stretching into multiple hours and 100’s of pages risked losing participant engagement.</p>'
  - type: portfolio-image
    data:
      filename: hiv-prevention-na-demos.jpg
      alt: four phone screenshots of vibrant screens communicating hiv-prevention information
      width: 2001
      height: 1000
      caption: Along with interactive activities, participants were taught important HIV-prevention information through vibrant graphics, hand-crafted text, and professional videos.
  - type: portfolio-callout
    data:
      heading: Participants were couples
      content: '<p>The study was designed for couples, but all pages needed to be completed by both participants who would then discuss their answers with each other. The page could be watching a video, listening to audio, or completing an activity.</p>

        <p>To make it more accessible, couples could sign in and participate on their individual devices or they could both sign in and participate on a shared device.</p>

        <p>When using their individual devices, the pages stayed in sync. The same page was presented to each participant at the same time, and it wouldn’t advance until both people were finished.</p>

        <p>When sharing a device, each participant took a turn on each page. The user interface displayed whose turn it was, and when finished, the next person took their turn. For this, I took inspiration from video games that feature cooperative multiplayer modes as they largely solved this problem.</p>

        <p>This device flexibility added significant UX challenges. </p>

        <p>The sign-in flow started with an email to each participant that contained links and their access code for the sign-in page. Initially, the email had links for individual devices and shared device sign-ins, both in English and Spanish. The form needed to know if they’re sharing a device so it can ask for the access code of the second participant. Unfortunately, four links proved to be too complicated for the participants and added friction.</p>

        <p>After a few iterations and tests, I rebuilt the flow. The email only had two links, one in English and one in Spanish. The sign-in page itself contained a language selector and asked one, and depending on the answer, a second, simple question. From here, the page knew which form to show. By simplifying the flow, participants were able to sign in with fewer mistakes.</p>'
  - type: portfolio-image
    data:
      filename: hiv-prevention-na-pair.svg
      alt: diagram showing sign-in flow
      width: 1124
      height: 565
      caption: Sign-in flow allowed participants to complete the activities together on their own devices or on a single, shared device.
  - type: portfolio-callout
    data:
      heading: Virtual facilitator
      content: '<p>Video and audio, along with text and images, performed the role of a virtual facilitator during sessions. This media introduced and explained the various activities and communicated the study information. All video and audio was professionally recorded by the client.</p>

        <p>Even though the study was fully remote and online, there were still situations in which a study administrator may need to get involved.</p>

        <p>If participants wanted help, they could reach out to administrators using the built-in contact information. Additionally, a notepad-type feature (the Parking Lot) allowed participants to save and send notes to administrators.</p>

        <p>To help maintain the validity and quality of the study, administrators were able to monitor activity. The platform sent out alerts if anomalies were present such as an activity taking too long or if one participant was more engaged than the other.</p>'
  - type: portfolio-callout
    data:
      heading: Accessibility
      content: '<p>This platform followed the Web Content Accessibility Guidelines (WCAG) 2.2 and was in compliance with level AA success criteria. Custom blocks were built to require accessibility components. For example, all video and audio components required text transcripts of audio.</p>

        <p>It was usable on computers, tablets, and phones, and participants could use their individual devices or they could share a single device. The UI and UX adjusted accordingly.</p>

        <p>Additionally, the study was specific to male Latino/x/e couples, so all content was available in English as well as Spanish.</p>'
  - type: portfolio-images-2col
    data:
      images:
        - filename: hiv-prevention-na-avatar.png
          alt: a sample of avatars that include a coffee pot, hot pepper, and sausage and meatballs shaped like a penis and testicles
          width: 1000
          height: 1000
          caption: Custom avatars added levity to platform notifications such as correct answers or required form field notifications.
        - filename: hiv-prevention-na-transcript.png
          alt: screenshots showing that audio and video elements have text transcripts
          width: 1000
          height: 1000
          caption: Video and audio building blocks required text transcripts of the audio to improve accessibility.
  - type: portfolio-callout
    data:
      heading: Keeping it fun and interactive
      content: '<p>The in-person study featured various whiteboarding, writing, and discussion activities that were facilitated by a person, so the challenge was to create a similar fun and interactive experience on the platform while staying within the relatively small budget.</p>

      <p>Some activities were able to be directly translated to a web interface while others had to be reimagined or simply replaced. I worked closely with the researchers to brainstorm ideas that were technically feasible while still giving them the information they needed.</p>

      <p>For example, “Mi Casa” and “Message in a Bottle” were activities that were able to be reproduced with minor modifications. I was able to put simple text boxes inside or around graphics that served the same purpose as the in-person exercises.</p>

      <p>One new activity was “Spin the Sex Wheel.” Participants spun a wheel and then discussed and negotiated with their partners which prevention tools they would use to make that specific activity hot, fun, and safe.</p>'
  - type: portfolio-image
    data:
      filename: hiv-prevention-na-activities.png
      alt: screenshots showing a spinning wheel, multiple choice, and text input activities
      width: 2000
      height: 667
      caption: Activities with different levels of interactivity including a spinning wheel, multiple choice, and stylized text input fields.
  
---
