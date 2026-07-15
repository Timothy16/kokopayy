<!-- pages/terms.vue -->
<template>
  <div>
    <LegalHero
      title="Terms of Service"
      subtitle="The terms that govern your use of the Kokopay website and services."
      last-updated="27th April, 2023"
    />
    <LegalContent :intro="intro" :sections="sections" />
  </div>
</template>

<script setup>
import LegalHero from '~/components/legal/LegalHero.vue'
import LegalContent from '~/components/legal/LegalContent.vue'

definePageMeta({ layout: 'default' })

const requestURL = useRequestURL()
const canonicalUrl = `${requestURL.origin}${requestURL.pathname}`
const description =
  'The terms and conditions that govern your use of the Kokopay website, app, and services.'

useSeoMeta({
  title: 'Terms of Service',
  description,
  ogTitle: 'Kokopay Terms of Service',
  ogDescription: description,
  ogImage: '/favicon.png',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kokopay Terms of Service',
  twitterDescription: description,
  twitterImage: '/favicon.png',
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

const intro = [
  'By using this website, you expressly agree to be bound by, and to comply with, these and any additional or amended terms and conditions (&ldquo;the Terms&rdquo;) which Kokopay may prescribe from time to time. If you do not agree to all of the Terms, you must not use our site.',
  'These Terms shall also apply to any website by any incorporated or unincorporated entity owned or controlled by us, which may be linked to or is otherwise accessible from this website.',
  'We recommend that you print a copy of these Terms for future reference. You agree that you will not remove or modify any acknowledgements, credits or legal notices contained on the website or in the content. Special terms may apply to some services offered on the website and may be posted in connection with the applicable service, feature or activity. Any such terms are in addition to this Agreement and, in the event of a conflict, any such terms shall prevail.',
  'We reserve the right to make changes to this website and to these Terms at any time. Every time you wish to use our site, please check these Terms to ensure you understand the terms that apply at that time.',
]

const sections = [
  {
    title: 'About the Information on this Site',
    body: [
      'The information and material available on the website are provided solely on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. You are encouraged to confirm the information contained. You should not construe any material on the website as a warranty or guarantee of the quality or availability of any services.',
    ],
  },
  {
    title: 'Liability Disclaimer',
    body: [
      'The information materials and opinions contained on this website are not intended to constitute professional advice and are merely for general information purposes only, which should not be relied on or treated as a substitute for specific advice relevant to particular circumstances. We do not accept any responsibility for any loss which may arise from reliance on information or materials published on this website. Any reliance you place on such materials and information is strictly at your own risk.',
      'Although we make reasonable efforts to ensure that the information on our website is accurate, we make no representations, warranties or guarantees, whether express or implied, that the content on our website is accurate, complete or up to date.',
      'This limitation shall also apply with respect to damages resulting from the inability to use this website, the operational failure of this website, or for any information obtained through this website, or otherwise arising out of the use of this website, whether based on contract, tort, strict liability or otherwise, even if we and/or any of our partners, associates, employees or suppliers have been advised of the possibility of damages.',
    ],
  },
  {
    title: 'Waiver',
    body: [
      'If you breach any of these Terms, we reserve the right to pursue any and all legal and equitable remedies against you, including without limitation the right to block access from a particular internet address. Should we fail to enforce any right or provision in these Terms, such failure does not constitute a waiver of such right or provision or of any other rights or provisions in these Terms.',
    ],
  },
  {
    title: 'Links to Other Websites',
    body: [
      'During the use of this website, links to websites that are owned and controlled by third parties may be provided from time to time for various reasons. Such links may direct you to a third-party website.',
      'Third-party websites have their own separate terms and conditions as well as privacy policies. We are not responsible for the content of any such sites, make no representations regarding any such sites, and do not necessarily endorse or approve of the information, material, products or services contained on or accessible through any such third-party sites. Kokopay therefore cannot be held liable for the activities of such third-party websites. You visit or access such third-party websites entirely at your own risk.',
      'Please note that third-party websites may send their own cookies to users, collect data or solicit personal information, and you are therefore advised to check the terms of use or privacy policies on those websites prior to using them.',
    ],
  },
  {
    title: 'Confidentiality and Sharing of Information',
    body: [
      'We will disclose information to third parties about your Account or transfers relating to your Account: (a) When that disclosure is necessary to complete a transfer; (b) To comply with government agency, court orders, or other valid legal process; (c) If we are provided with your permission; (d) If we need to examine claims of error, resolve a merchant dispute or look into possible unauthorized use; (e) If we need to verify the existence and condition of your Account for a third party, such as a credit bureau or a merchant; (f) Please refer to Kokopay&rsquo;s Privacy Policy for further information regarding confidentiality and the extent to which we may share member information.',
    ],
  },
  {
    title: 'Data Protection and Privacy',
    body: [
      'Kokopay respects your right to privacy and personal information, and takes data privacy seriously. Our Privacy Policy is based on the Kenya Data Protection Act No. 24 of 2019 which is in line with the General Data Protection Regulations of the European Union (the GDPR) and the National Information and Technology Agency Act and Regulations (NITDA). For more information, see our <a href="/privacy-policy" class="underline underline-offset-2">Privacy Policy</a>.',
    ],
  },
  {
    title: 'Anti-Money Laundering',
    body: [
      'We abide by our anti-money laundering (AML) policies that are generally based on the highest standard and apply in relation to all of our business in all of our offices. Kokopay conducts client due diligence enquiries on each new customer and persons connected with them and conducts ongoing monitoring of existing clients. These enquiries are based on the requirements of the Proceeds of Crime and Anti-Money Laundering Act, CAP 59B of the Laws of Kenya. Additional information may also be obtained if required by any applicable local rules. Where necessary for these purposes, we may seek relevant information from third-party data suppliers. Where individuals have supplied personal data for this purpose we will only use it for that purpose and will keep it only as long as the relevant AML and data protection legislation requires.',
      'Kokopay also has internal procedures to ensure that any suspicions of money laundering are reported to the appropriate authorities where there is an obligation to do so.',
    ],
  },
  {
    title: 'Anti-Bribery and Anti-Corruption',
    body: [
      'Kokopay has a zero-tolerance policy towards bribery or corruption by, or on behalf of, any member company. This applies to all members of Kokopay including assignees, associates and employees, and to third parties providing services on our behalf.',
      'We are committed to:',
      '(a) conducting business in a manner that complies with applicable laws and is consistent with the highest ethical standards including, among other things, standards intended to prevent bribery and corruption; and',
      '(b) using our best endeavours to ensure that those who perform services for and on behalf of Kokopay are aware of and share our commitment to conducting business ethically.',
      'We will not use third parties or intermediaries to engage on our behalf in unethical practices that would be prohibited under any applicable laws if undertaken by us. We expect that all third-parties and intermediaries that we engage will conduct themselves accordingly when acting on behalf or for the benefit of Kokopay.',
      'Kokopay is committed to transparency on its ethical standards and anti-bribery and anti-corruption initiatives, and has established procedures that are described in our Anti-Bribery and Anti-Corruption Policy to encourage all members of the firm to report instances or allegations of policy violations.',
    ],
  },
  {
    title: 'Intellectual Property Rights',
    body: [
      'All content, material and information, including any compilation (meaning the collection, arrangement and assembly of information) included on this website are unless otherwise stated the exclusive copyright works of Kokopay and protected by local and international copyright laws.',
      'Without derogating from the above, we authorize you to view, copy (in paper or electronic form), download to a local drive, print and distribute the content of this website, or parts thereof, provided that:',
      '(a) Kokopay is acknowledged as the source;',
      '(b) such content is used for information purposes only (you are expressly prohibited from incorporating any of the material from this website in any other work, publication or website of your own or belonging to another entity);',
      '(c) any reproduction of material from this website or portion thereof must include this notice in its entirety;',
      '(d) any reproduction of material or content should not be modified in any way must remain intact; and',
      '(e) your communication of the content or material must not be misleading or inaccurate and a copy of this notice must accompany any copies of the materials which you provide to others.',
      'No other use of the materials published on this website is permitted without the express prior written consent of Kokopay.',
    ],
  },
  {
    title: 'Limitations on Transfers & Accounts',
    body: [
      'Kokopay may request certain financial information from you from time to time to enable us to establish transaction limits. You agree to provide such information upon request. If we determine that providing you with the Service will result in an unacceptable credit risk, or will cause us to violate a law, rule, regulation or ordinance, we may, in our sole and exclusive discretion, without prior notice (unless required by Applicable Law), limit your transaction volume, dollar amount, or terminate all of the Services that are being provided to you.',
      'Kokopay&rsquo;s transaction limit is set at Kenya Shillings Six hundred thousand (Kshs. 600,000) and Three Million (NGN 3,000,000) Nigerian Naira.',
      'For security reasons there may be limitations on the number of transactions that Members can make using terminals, online and mobile services, or the Audio Response service.',
    ],
  },
  {
    title: 'Term and Termination',
    body: [
      'These Terms between you and Kokopay are concluded for an indefinite period. You are entitled to terminate the contract at all times by permanent deletion of the website data stored on your devices.',
    ],
  },
  {
    title: 'Applicable Law',
    body: [
      'These Terms shall be governed by, and construed in accordance with, the laws of the Republic of Kenya without giving effect to the principles of conflict of laws. You hereby consent to the exclusive jurisdiction of the High Court of the Republic of Kenya in respect of any disputes arising in connection with this website.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'Your continued use of this website is contingent upon your agreement to be bound by the foregoing Terms.',
      'Please contact us at <a href="mailto:support@mykokopay.com" class="underline underline-offset-2">support@mykokopay.com</a> with any questions regarding these Terms.',
    ],
  },
]
</script>