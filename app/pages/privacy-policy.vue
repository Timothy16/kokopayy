<!-- pages/privacy-policy.vue -->
<template>
  <div>
    <LegalHero
      title="Privacy Policy"
      subtitle="How Kokopay collects, uses, and safeguards your personal data."
      last-updated="27th April, 2023"
    />
    <LegalContent :sections="sections" />
  </div>
</template>

<script setup>
import LegalHero from '~/components/legal/LegalHero.vue'
import LegalContent from '~/components/legal/LegalContent.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  'How Kokopay collects, uses, shares, and safeguards your personal data across our website and app.'

useSeoMeta({
  title: 'Privacy Policy',
  description,
  ogTitle: 'Kokopay Privacy Policy',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay Privacy Policy',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

const sections = [
  {
    title: '1. Introduction',
    body: [
      '1.1. We are committed to safeguarding your privacy as well as the security of any Personal Data (as defined below) that you share with us through this website. All processing of such Personal Data shall be carried out in full compliance with the requirements of all applicable laws.',
      '1.2. For purposes of this Privacy Policy, the term Personal Data shall mean any information relating to an identified natural person, or an identifiable natural person, who can be identified directly or indirectly, by reference to any data that relates to them (for instance their name, an identification number, location data or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that person).',
      '1.3. This Privacy Policy explains that Kokopay (hereinafter referred to as, &lsquo;we&rsquo;, &lsquo;us&rsquo; or &lsquo;the firm&rsquo;) may collect, use, share, safeguard and/or otherwise process information (including Personal Data) provided through this website.',
      '1.4. We reserve the right to amend the Privacy Policy at any time, at our discretion. We shall notify you of any amendment to the Privacy Policy as soon as possible.',
      '1.5. As from the effective date of this Privacy Policy, any existing Personal Data already held by us shall be deemed to have been legally collected and processed unless you, as the data subject, requests for the correction or deletion of any part of your information held.',
    ],
  },
  {
    title: '2. Collection of Information',
    body: [
      '2.1. We may collect Personal Data directly from you in the course of your use of this website or your interaction with us through this website, except for instances where the law permits us to collect your Personal Data from other sources.',
      '2.2. We may also collect Personal Data directly from you through your subscriptions to the firm&rsquo;s subscription service provided by the firm.',
      '2.3. We may also collect other Personal Data in the course of providing legal services to you or your employer, or to someone else based on subsequent interactions with you.',
      '2.4. We may also collect Personal Data in the course of providing other services to you or your employer, including training services and any other services that we may offer through our website.',
      '2.5. Some of the Personal Data that may be collected from your interaction with us from this website include your name, business contact details, job title or position and your expertise and interests.',
      '2.6. If necessary, we may collect other Personal Data &ndash; for example, your membership of professional associations or boards or, in rare cases, financial information.',
      '2.7. We collect Personal Data when we (or propose to be) deal with, or provide or market our services to you as a client, or someone employing or engaging you. In accordance with our legal obligations we inform you of the following:',
      '(a) the fact that we are collecting your Personal Data from you (see sections iii &ndash; viii below);',
      '(b) the purpose for which we intend to collect your Personal Data including why we are collecting your Personal Data and how we plan to use it (see section 3 below);',
      '(c) the third parties to whom your personal data will be shared or transferred, including details of safeguards adopted (see sections 4 and 5 below);',
      '(d) a description of the technical and organizational security measures taken to ensure the integrity and confidentiality of the data (see section 5 below);',
      '(e) your rights as the subject of the Personal Data which we collect from you (see section 6 below);',
      '(f) the contacts of the data controller or data processor who will handle your Personal Data (see section 7 below);',
      '(g) whether the data is being collected pursuant to any law and whether such collection is voluntary or mandatory (see paragraph (k) below); and',
      '(h) the consequences where the data subject fails to provide all or any part of the requested data (see paragraph (n) below).',
      '2.8. If you apply for a job with us we may collect certain Personal Data from you such as your name and contact details and information about your working history. We may also collect your Personal Data from relevant records checks, from any recruitment consultant and from your previous employers, universities and others who may be able to provide information to us to assist us in our decision on whether or not to make you an offer of employment. As part of the job application process and in every other instance where we intend to collect your Personal Data from other sources besides you, we will, in so far as practicable, notify you of the fact that we intend to collect such Personal Data. In instances where you apply for any employment position with us, you agree that by so doing, you are validly consenting to our collection of your relevant Personal Data from other sources for purposes of evaluating your application.',
      '2.9. Should we ever collect your Personal Data from sources other than you, in any other context besides where you have applied for employment with us, we will, in so far as it is practicable, notify you before we collect such Personal Data from such other sources.',
      '2.10. We generally only collect Personal Data from this website when it is provided voluntarily by you &ndash; for example, when you fill in a form on the careers section or subscribe to our publications or register to attend a seminar and or register to use our products.',
      '2.11. If the Personal Data is intended to be collected pursuant to any law or where the collection of such Personal Data is mandatorily required, we will notify you of this directly prior to collecting such data.',
      '2.12. We use cookies on our website and as such, we also obtain Personal Data from your IP address, operating system and web browser that you use to access our website.',
      '2.13. When you visit our website, our server will record your IP address together with the date, time and duration of your visit. An IP address is an assigned number, similar to a telephone number, which allows your computer to communicate over the Internet. It enables us to identify which organizations have visited this website. We use this information to compile statistical data on the use of our website to track how users navigate through our site in order to enable us to evaluate and improve our site.',
      '2.14. Please note that the provision of your Personal Data to us may be necessary for enabling the use or functioning of certain features of this website or the provision of certain services through this website. To that extent, any such features or services may not be functional or available for use or capable of being used in the absence of the provision of your Personal Data.',
    ],
  },
  {
    title: '3. Purpose of Collection and Use of Personal Data',
    body: [
      'We may use your Personal Data in a variety of ways once collected including, but not limited to:',
      '(a) responding to your emails or online requests for products, services or information;',
      '(b) providing you with service communications such as bill reminders, order confirmations, programme registrations and client service messages;',
      '(c) fulfilling and/or delivering our products and services;',
      '(d) delivering and processing surveys;',
      '(e) personalizing and improving the usability of this website;',
      '(f) tailoring content, advertising and marketing to you; and',
      '(g) sharing your Personal Data with certain third parties so as to fulfil any express service requests which you make to us. We may also share such information with service providers that perform business functions for us.',
    ],
  },
  {
    title: '4. Sharing your information',
    body: [
      '4.1. We may on occasion be required to share your information with our other offices and any third parties, who provide services on our behalf. In relation to any such disclosure of your Personal Data, we will notify you of this as soon as reasonably practicable and shall only disclose your Personal Data where you have given your consent or where we are required or otherwise permitted to do so by any applicable law, or where it is necessary for the purpose of, or in connection with, legal proceedings or in order to exercise or defend legal rights.',
      '4.2. We may also share e-mail addresses with third parties as necessary for them to perform certain services on our behalf, such as packaging, mailing and delivering products to you and processing event registrations and responding to your service requests.',
      '4.3. Some of your Personal Data may be stored in a cloud or server located within or outside Kenya and managed by a third-party service provider. Where we transfer your Personal Data outside Kenya, this shall be solely for purposes of ensuring the safety of such Personal Data and for purposes of ensuring operational efficiency. In addition to this, we will take reasonable steps to ensure that your Personal Data is treated securely and that the means of transfer provides adequate safeguards.',
    ],
  },
  {
    title: '5. Information Security',
    body: [
      '5.1. We use up-to-date data storage and security systems to hold your Personal Data securely in electronic and physical form to protect your personal information from unauthorized access, improper use or disclosure, unauthorized modification or unlawful destruction or accidental loss. Our IT usage and security policy is supported by various security standards, processes and procedures.',
      '5.2. We implement commercially reasonable security measures to help protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure. Accordingly, and despite our efforts, we cannot guarantee or warrant the security of any information you transmit to us, or to or from our online products or services.',
      '5.3. All persons who have access to confidential information (including Personal Data) that we hold, including our partners, staff and third-party service providers are subject to confidentiality obligations.',
    ],
  },
  {
    title: '6. Your Rights',
    body: [
      '6.1. You have certain rights that you can exercise in relation to any of your Personal Data that we process. These are:',
      '(a) the right to be informed of the use to which your Personal Data is to be put;',
      '(b) the right to object to the processing of all or part of your Personal Data;',
      '(c) the right to access your Personal Data;',
      '(d) the right to the correction of any false or misleading parts of your Personal Data;',
      '(e) the right to the deletion any false or misleading parts of your Personal Data.',
      '(f) the right to data portability, which is the right to receive your Personal Data in a structured, commonly-used and machine-readable format and to transmit it from us to another data controller or data processor without hindrance;',
      '(g) the right not to be subjected to a decision based solely on automated processing which produces legal effects that concern or significantly affect you;',
      '(h) the right to the rectification of any inaccurate, outdated, incomplete or misleading portions or parts of your Personal Data; and',
      '(i) the right to the erasure or destruction of any portions or parts of your Personal Data that are irrelevant, excessive, unlawfully obtained or that we are no longer authorized to retain.',
      '6.2. In the limited circumstances where you may have provided your consent to the collection, processing and transfer of your Personal Data for a specific purpose, you have the right to withdraw your consent for that specific purpose at any time. Once we receive notification that you withdraw your consent, we will no longer process your information for the purpose or purposes you originally agreed to, unless we have another legitimate basis for doing so in law.',
      '6.3. If you would like to exercise any of these rights, please contact us in writing by emailing <a href="mailto:support@mykokopay.com" class="underline underline-offset-2">support@mykokopay.com</a>.',
    ],
  },
  {
    title: '7. Contact Information',
    body: [
      'If you would like more information concerning this privacy policy and how it affects you, please contact the Kokopay team at <a href="mailto:support@mykokopay.com" class="underline underline-offset-2">support@mykokopay.com</a> or call <a href="tel:+254116018888" class="underline underline-offset-2">+254 116 018 888</a>.',
    ],
  },
]
</script>