<!-- pages/cookies.vue -->
<template>
  <div>
    <LegalHero
      title="Cookie Policy"
      subtitle="Read and learn about our cookie policy."
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
  'How Kokopay uses cookies, web beacons, and other tracking technologies, and how you can control them.'

useSeoMeta({
  title: 'Cookie Policy',
  description,
  ogTitle: 'Kokopay Cookie Policy',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay Cookie Policy',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

const sections = [
  {
    title: 'Introduction',
    body: [
      'Kokopay (&ldquo;we&rdquo; or &ldquo;us&rdquo; or &ldquo;our&rdquo;) may use cookies, web beacons, tracking pixels, and other tracking technologies when you visit our website mykokopay.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the &ldquo;Site&rdquo;) to help customize the Site and improve your experience.',
      'We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last Updated&rdquo; date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.',
      'You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.',
    ],
  },
  {
    title: 'Use of Cookies',
    body: [
      'A &ldquo;cookie&rdquo; is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.',
    ],
  },
  {
    title: 'Types of Cookies',
    body: [
      'The following types of cookies may be used when you visit the Site:',
    ],
    subsections: [
      {
        title: 'Advertising Cookies',
        body: [
          'Advertising cookies are placed on your computer by advertisers and ad servers in order to display advertisements that are most likely to be of interest to you. These cookies allow advertisers and ad servers to gather information about your visits to the Site and other websites, alternate the ads sent to a specific computer, and track how often an ad has been viewed and by whom. These cookies are linked to a computer and do not gather any personal information about you.',
        ],
      },
      {
        title: 'Analytics Cookies',
        body: [
          'Analytics cookies monitor how users reached the Site, and how they interact with and move around once on the Site. These cookies let us know what features on the Site are working the best and what features on the Site can be improved.',
        ],
      },
      {
        title: 'Our Cookies',
        body: [
          'Our cookies are &ldquo;first-party cookies&rdquo;, and can be either permanent or temporary. These are necessary cookies, without which the Site won&rsquo;t work properly or be able to provide certain features and functionalities. Some of these may be manually disabled in your browser, but may affect the functionality of the Site.',
        ],
      },
      {
        title: 'Personalisation Cookies',
        body: [
          'Personalisation cookies are used to recognise repeat visitors to the Site. We use these cookies to record your browsing history, the pages you have visited, and your settings and preferences each time you visit the Site.',
        ],
      },
      {
        title: 'Security Cookies',
        body: [
          'Security cookies help identify and prevent security risks. We use these cookies to authenticate users and protect user data from unauthorised parties.',
        ],
      },
      {
        title: 'Site Management Cookies',
        body: [
          'Site management cookies are used to maintain your identity or session on the Site so that you are not logged off unexpectedly, and any information you enter is retained from page to page. These cookies cannot be turned off individually, but you can disable all cookies in your browser.',
        ],
      },
      {
        title: 'Third-Party Cookies',
        body: [
          'Third-party cookies may be placed on your computer when you visit the Site by companies that run certain services we offer. These cookies allow the third parties to gather and track certain information about you. These cookies can be manually disabled in your browser.',
        ],
      },
    ],
  },
  {
    title: 'Control of Cookies',
    body: [
      'Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser&rsquo;s settings. Please be aware that such action could affect the availability and functionality of the Site.',
      'For more information on how to control cookies, check your browser or device&rsquo;s settings for how you can control or reject cookies:',
    ],
    list: [
      'Apple Safari',
      'Google Chrome',
      'Microsoft Edge',
      'Microsoft Internet Explorer',
      'Mozilla Firefox',
      'Opera',
      'Android (Chrome)',
      'Blackberry',
      'iPhone or iPad (Chrome)',
      'iPhone or iPad (Safari)',
    ],
  },
  {
    title: 'Other Tracking Technologies',
    body: [
      'In addition to cookies, we may use web beacons, pixel tags, and other tracking technologies on the Site to help customize the Site and improve your experience. A &ldquo;web beacon&rdquo; or &ldquo;pixel tag&rdquo; is a tiny object or image embedded in a web page or email. They are used to track the number of users who have visited particular pages and viewed emails, and acquire other statistical data. They collect only a limited set of data, such as a cookie number, time and date of page or email view, and a description of the page or email on which they reside. Web beacons and pixel tags cannot be declined. However, you can limit their use by controlling the cookies that interact with them.',
    ],
  },
  {
    title: 'Privacy Policy',
    body: [
      'For more information about how we use information collected by cookies and other tracking technologies, please refer to our <a href="/privacy-policy" class="underline underline-offset-2">Privacy Policy</a> posted on the Site. This Cookie Policy is part of and is incorporated into our Privacy Policy. By using the Site, you agree to be bound by this Cookie Policy and our Privacy Policy.',
    ],
  },
]
</script>