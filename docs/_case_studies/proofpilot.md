---
layout: portfolio-single
title: Platform to design, launch, and participate in research studies
require_password: false

feed:
  label: Clinical trial SaaS
  image: proofpilot-feed.jpg

hero:
  image_file: proofpilot-featured.png
  gradient_c1: '#CA4E21'
  gradient_c2: '#953A18'
  gradient_angle: 140deg

client: ProofPilot
challenge: Design a platform that supports clinical trial participants, proctors, and sponsors.
solution: Identify and address needs and friction for each role and distill them into easy to understand interfaces and experiences.
result: A unified, role-aware platform that improves participant engagement while enabling study proctors to efficiently manage visits and interventions, and simplified clinical trial design and administration.

modules:
  - type: portfolio-image
    data:
      filename: proofpilot-study-design.png
      alt: screenshot of the study design interface showing measurements and interventions across 3 arms
      width: 2000
      height: 1000
      caption: Study design interface visualized all elements and activities of a study within study arms.
  - type: portfolio-callout
    data:
      heading: Design system for consistency across various user roles
      content: '<p>The platform was a coherent experience for participants, proctors, and sponsors involved in clinical trials.</p> 

        <p>I made extensive use of wireframes to map the journey of each user role. Usability testing allowed me to identify elements and functionality that were consistent across all three roles and informed the components of a reusable library.</p>

        <p>Shared systems such as scheduling, communication, and activity screens were consistent, but interfaces and workflows were tailored to the context of each user. Participants and proctors got a similar “front-facing” experience and sponsors got the custom-tailored experience required for the complexities of designing a clinical trial.</p>

        <p>My first attempt at usability testing provided suboptimal results because I didn’t consult subject matter experts on content, so users, particularly proctors and sponsors, were tripped up on screens that didn’t make sense in their contexts.</p>'
  - type: portfolio-callout
    data:
      heading: Inclusive by design
      content: '<p>The platform design followed accessibility best practices and met Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards, including but not limited to color contrast, text scalability, and transcript support for all audio and video elements.</p>'
  - type: portfolio-callout
    data:
      heading: Engaging participants
      content: '<p>The experience for participants was designed to increase clarity  and engagement with a “fun” feel that wasn’t overly clinical.</p> 

        <p>Complex study requirements were translated into clear, step-by-step tasks that made visits, activities, and interventions easy to understand and anticipate. The task list was modeled after an email inbox and included thumbnails to help differentiate activities, and an Upcoming tasks area allowed participants to see future expectations.</p>

        <p>Custom and approachable input controls were created to ensure accurate and consistent data collection. Some of these controls included Likert scales, image-driven radio buttons, and camera capture functionality.</p>'
  - type: portfolio-images-2col
    data:
      images:
        - filename: proofpilot-wf-participant.png
          alt: wireframe showing a participant task list and user flow to task intro screen
          width: 1000
          height: 1000
          caption: Low-fidelity wireframes of the participant activity experience. Available tasks were visible in an inbox-type interface and selecting a task would advance to that task’s introduction screen.
        - filename: proofpilot-dependency.png
          alt: piece of the study design interface showing task dependencies using arrows
          width: 1000
          height: 1000
          caption: To help study designers visualize study flow and logic, they were able to view a task’s dependencies and succeeding tasks by selecting the decision diamond associated with that task.
  - type: portfolio-callout
    data:
      heading: Workflows for site and proctors
      content: '<p>Site staff and study proctors were able to manage participant visits and interventions more efficiently and with greater accuracy.</p>

      <p>Their experience was streamlined to prepare them for site visits. Upcoming visits and required actions were emphasized, and participant status was visible at a glance to reduce administrative overhead and confusion. By prioritizing speed, clarity, and reliability, the platform supported real-world clinical operations without disrupting existing site workflows.</p>'
  - type: portfolio-callout
    data:
      heading: Study design and administration
      content: '<p>The study design and administration experience was structured around study arms, supporting both simple single-arm studies and complex multi-arm randomized controlled trials. By aligning the UI with the way studies are actually conceived and discussed, the platform reduced friction and ambiguity during setup.</p>

      <p>Administrators could define activities within each arm, including measurements, interventions, rewards, and data presentations, making study logic explicit and easier to manage. A distinct design language for each activity type allowed teams to quickly scan a study and understand its structure, reducing configuration errors and review time.</p>

      <p>A timeline view presented the study as a duration, helping sponsors visualize sequencing, dependencies, and the overall participant experience. Purpose-built UI components ensured activities were configured correctly, with custom inputs for data collection and support for video and audio instructions when additional guidance was needed.</p>

      <p>To accelerate setup and promote consistency, the platform offered a library of reusable templates for common trial structures, allowing teams to start from a proven baseline rather than a blank slate. A hierarchical visualization of the study flow further supported accuracy by making dependencies and triggers visible, helping teams identify logic gaps and resolve issues before launch.</p>'
---
