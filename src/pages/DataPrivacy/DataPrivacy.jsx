import React, { useState } from "react";
import styles from "./DataPrivacy.module.css";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Booking from '../Booking/Booking.jsx';

const DataPrivacy = () => {

    // CONTACT FORM POPUP

    const [showBookingForm, setShowBookingForm] = useState(false);
    const location = useLocation();

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    const toggleBookingForm = () => {
        setShowBookingForm(!showBookingForm);
    };


    {/* SEO SECTION - DO NOT TOUCH */}

    const articleStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Structured data for you',
        description: 'This is an article that demonstrates structured data.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/JSON-LD.svg',
        datePublished: new Date('2021-09-04T09:25:01.340Z').toISOString(),
        author: {
          '@type': 'Person',
          name: 'John Reilly',
          url: 'https://johnnyreilly.com/about',
        },
      };

    {/* END OF SEO SECTION */}

    return (

        <div className={styles.homeContainer}>


            {/* SEO SECTION - DO NOT TOUCH */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Table of Contents</title>
                <link rel="canonical" href="https://www.smatched.io/" />
                <link rel="canonical" href="https://www.offerwallmonetization.com/" />

            </Helmet>

            
            <div style={{display: 'none'}}>
                <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleStructuredData),
                }}
                />

                <h1>{articleStructuredData.headline}</h1>
                <h3>
                by{' '}
                <a href={articleStructuredData.author.url}>
                    {articleStructuredData.author.name}
                </a>{' '}
                on {articleStructuredData.datePublished}
                </h3>

                <img
                style={{ width: '5em' }}
                alt="https://json-ld.org/ - Website content released under a Creative Commons CC0 Public Domain Dedication except where an alternate is specified., CC0, via Wikimedia Commons"
                src={articleStructuredData.image}
                />

                <p>{articleStructuredData.description}</p>

                <p>Take a look at the source of this page and find the JSON-LD!</p>
            </div>

            {/* END OF SEO SECTION */}



            {/* First Home */}

            <div className={styles.firstHomeContainer}>

                <div className={styles.topFirst}>
                    <div className={styles.mainFirst}>
                        <div className={styles.rightMain}>
                            <h1 className={styles.text}>
                                Data Privacy
                            </h1>
                            <div className={styles.list}>
                            <ul>
                                <li><a href="">Preamble</a></li>
                                <li><a href="">Information on the processing of your data</a></li>
                                <li><a href="">Information collected during download</a></li>
                                <li><a href="">Information collected automatically</a></li>
                                <li><a href="">Creation of a user account (registration) and login</a></li>
                                <li><a href="">Using the app</a></li>
                                <li><a href="">Processing of disbursement & provision of credits</a></li>
                                <li><a href="">Data sharing and transfer</a></li>
                                <li><a href="">Sharing on the basis of your consent</a></li>
                                <li><a href="">Disclosure without explicit consent</a></li>
                                <li><a href="">Essential tools and tracking tools</a></li>
                                <li><a href="">Forwarding to third parties</a></li>
                                <li><a href="">Use of cookies</a></li>
                                <li><a href="">Changes of purpose</a></li>
                                <li><a href="">Data Retention Period</a></li>
                                <li><a href="">Your rights as a data subject</a></li>
                                <li><a href="">Right of access</a></li>
                                <li><a href="">Right to rectify inaccurate data</a></li>
                                <li><a href="">Right to erasure</a></li>
                                <li><a href="">Right to restriction of processing</a></li>
                                <li><a href="">Right to data portability</a></li>
                                <li><a href="">Right of objection</a></li>
                                <li><a href="">Right to withdraw consent given</a></li>
                                <li><a href="">Right of appeal</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Protection of your data</a></li>
                                <li><a href="">Changes to this Privacy Policy</a></li>
                            </ul>

                            </div>
                        </div>
                        <div className={styles.leftMain}>
                            <h2>Preamble</h2>

                                <div className={styles.leftSub}>This service (hereinafter “App”) is provided by Rissland Marketing UG, Kurfürsten-Anlage 52, 69115 Heidelberg, Germany, represented by its managing director 
                                Alexander Rissland (hereinafter “we” or “us”) as the responsible party within the meaning of the applicable data protection law.
                                </div>
                                <div className={styles.leftSub}>With our app, we enable interaction between users and advertising companies (hereinafter referred to as partner companies).
                                </div>

                            <h2>Our services include:</h2>

                                <ul className={styles.leftSub}>
                                    <li>The sending / displaying of advertising messages / marketing messages, about content of interest to the user, links, videos, offers, whereby it is both our own advertising content 
                                        and advertising content from our partner companies;</li>
                                    <li>The offering of surveys that we conduct for ourselves or a partner company;</li>
                                    <li>Analyzing the browsing and usage behaviour of users;</li>
                                    <li>The matching of the interests of the user and the offer of partner companies (so-called matching).Communication with you</li>
                                    <li>Our service is insofar based on an evaluation of the user’s surfing behaviour, whereby we also make use of the help of third parties (Google Ireland Limited, Ireland).</li>
                                </ul>
                                <div className={styles.leftSub}>As a thank you for participating in various campaigns, users receive points that are paid out in the form of rewards (e.g. a gift voucher). If there are 
                                matches between the user’s interest and the offer of a partner company, the user is also informed about relevant offers of the respective partner company.
                                <br/>
                                <br/>
                                The use of the app, as well as the performance of actions, tasks and surveys, is voluntary and can also be cancelled at any time.
                                <br/>
                                <br/>
                                When using the app, we process personal data (in particular the IP address, preferences, etc.) about you, whereby we avoid sensitive topics such as religion, health and sexuality.
                                <br/>
                                <br/>
                                Personal data means any information relating to an identified or identifiable natural person.
                                <br/>
                                <br/>
                                Because protecting your privacy when using the app is important to us, we would like to inform you in the following which personal data we process when you use the app and how we handle 
                                this data. In addition, we will inform you about the legal basis for the processing of your data and, insofar as the processing is necessary to protect our legitimate interests, 
                                also about our legitimate interests.
                                <br/>
                                <br/>
                                You can access this privacy policy at any time under the menu item <b>“Settings” > “Privacy”</b> within the app.
                                </div>

                            <h2>1. Information on the processing of your data</h2>

                                <div className={styles.leftSub}>Certain information is already processed automatically when you use the app. We have listed exactly which personal data is processed for you below:
                                </div>

                                <h3>1.1 Information collected during download</h3>
                                <div className={styles.leftSub}>When downloading the app, certain required information is transmitted to the app store selected by you (e.g. Google Play or Apple App Store), in particular 
                                the user name, the email address, the customer number of your account, the time of the download, payment information and the individual device identification number may be processed. 
                                The processing of this data is carried out exclusively by the respective App Store and is beyond our control. If you would like more information on this, you should take a look at the 
                                privacy policy of the respective app store.
                                </div>

                                <h3>1.2 Information collected automatically</h3>
                                <div className={styles.leftSub}>As part of your use of the App, we automatically collect certain data that is necessary for the use of the App. This includes:
                                <br/>
                                <br/>
                                Internal device ID, version of your operating system, time of access, IP address.
                                <br/>
                                <br/>
                                This data is automatically transmitted to us, but not stored, (1) to provide you with the Service and related features; (2) to improve the functions and performance features of the App; 
                                and (3) to prevent and remedy misuse and malfunctions. This data processing is justified by the fact that (1) the processing is necessary for the performance of the contract between you 
                                as the data subject and us pursuant to Art. 6 (1) (b) DSGVO for the use of the App, and / or (2) we have a legitimate interest in ensuring the functionality and error-free operation of 
                                the App and in being able to offer a service that is in line with the market and interests, which here outweighs your rights and interests in the protection of your personal data within 
                                the meaning of Art. 6 (1) (f) DSGVO.
                                </div>

                                <h3>1.3 Creation of a user account (registration) and login</h3>
                                <div className={styles.leftSub}>When you create a user account or register, we use your access data (email address and password) to grant you access to your user account and to manage it 
                                (“mandatory data”). Mandatory data within the scope of registration are required for the conclusion of the user contract. If you do not provide this information, you will not be able to 
                                create a user account.
                                <br/>
                                <br/>
                                We use the mandatory data to authenticate you when you log in and to follow up on requests to reset your password. We process and use the information you provide during registration or 
                                login to (1) verify your eligibility to manage the user account; (2) enforce the app’s terms of use and any associated rights and obligations; and (3) contact you to send you technical 
                                or legal notices, updates, security notifications or other messages relating to, for example, the management of the user account.
                                <br/>
                                <br/>
                                This data processing is justified by the fact that (1) the processing is necessary for the performance of the contract between you as the data subject and us pursuant to Art. 6 (1) (b) 
                                DSGVO for the use of the app, and / or (2) we have a legitimate interest in ensuring the functionality and error-free operation of the app, which here outweighs your rights and interests 
                                in the protection of your personal data within the meaning of Art. 6 (1) (f) DSGVO.
                                <br/>
                                <br/>
                                You may create a user account (hereinafter also referred to as “Profile”) on our Services in order to access the Smatched Services and your Features. In order to do so, you must log in 
                                to one of our social media partners with one of your accounts. In the process, our social media partners (Facebook, Instagram, Google, Apple, Twitter, TikTok) transmit personal data such 
                                as your email address to us and we process this data to create a user account and store it in our information technology systems. Your IP address and the time of registration are also stored.
                                <br/>
                                <br/>
                                When you log in to your profile, Smatched places cookies on your terminal device to enable you to remain logged in – even if you have to reload the app in the meantime. By creating the 
                                profile, you can use the functions of Smatched.
                                <br/>
                                <br/>
                                The processing operations associated with the creation and completion of a profile serve the purpose of being able to allocate future usage operations and to be able to access the entire 
                                range of Smatched services. Directly connected with this is, for example, checking whether you are suitable for surveys that we receive from the marketplaces. In order to participate in 
                                surveys, you must meet the criteria requested for the specific survey. We check whether you meet the criteria either by requesting you (if we have not yet requested the survey criteria from you), 
                                or automatically (if we have already requested the survey criteria from you) after receipt of the survey by comparing the criteria with the personal details you have provided. The 
                                processing of your data thus serves the execution of the contract, is thus purpose-bound and necessary according to Art. 6 para. 1 lit. b DSGVO.
                                <br/>
                                <br/>
                                The storage of IP address and time of registration is necessary to ensure the security of our information technology systems. This is also our legitimate interest, which is why the 
                                processing is also lawful according to Art. 6 Para. 1 lit. f DSGVO.
                                <br/>
                                <br/>
                                The personal data entered by you will be stored until the time of deletion of your profile at Smatched, beyond that only as long as the processing is necessary for any contract fulfilment.
                                <br/>
                                <br/>
                                We do not intend to pass on your data to third parties. All checks on the requested criteria in a survey are carried out by us on our servers.
                                </div>

                                <h3>1.4 Using the app</h3>
                                <div className={styles.leftSub}>Within the framework of the app, you can carry out, manage and edit various activities. As part of the activities, we store certain information about you and 
                                your user and surfing behaviour. The most important functions of the app include that
                                <br/>
                                <ul className={styles.leftSub}>
                                    <li>we and the third parties mentioned in section 2 learn through the use of the app, in particular the tasks set (e.g. surveys, etc.), which interests you have with regard to products, 
                                        topics, brands, etc. and which information and offers from companies are relevant to you, so that</li>
                                    <li>we can provide you with information in the app about the products, topics, brands, etc. you are interested in.</li>
                                    <li>we can show you relevant offers/advertisements from “matched” partner companies in the app on this basis</li>
                                    <li>partner companies can conduct market research based on anonymised data</li>
                                    <li>Partner companies with which a “match” exists can provide you with new tasks with which you can earn points.</li>
                                    <li>The following data processing takes place:</li>
                                </ul>
                                <br/>
                                We store your activities, such as survey results, in order to transmit them anonymously as statistical evaluation data to partner companies after the end of a campaign. These partner 
                                companies in turn use this data for marketing and analysis purposes.
                                <br/>
                                <br/>
                                In addition, we integrate third-party advertisements and videos within the app via the “Google Admob” advertising network and the “YouTube” video portal of the Irish company Google Ireland 
                                Limited. You can find more details on data processing in this respect under point 2 of this notice.
                                <br/>
                                <br/>
                                The app also requires the following authorizations:
                                <br/>
                                <br/>
                                Internet access: This is required to store your entries on our servers, to evaluate and check your interactions and to prevent misuse.
                                <br/>
                                <br/>
                                The processing and use of usage data is carried out to provide the service. This data processing is justified by the fact that the processing is necessary for the performance of the contract 
                                between you as the data subject and us pursuant to Art. 6 (1) lit. b) DSGVO for the use of the app. Data processing for advertising purposes is a main service in this respect. In addition, 
                                we have a legitimate interest in the data processing within the meaning of Art. 6 para. 1 lit. f DSGVO. Since you are free to use our app and we also provide detailed information about data 
                                processing, our legitimate interest outweighs your rights and freedoms.
                                <br/>
                                <br/>
                                </div>
                                  

                                <h3>1.5 Processing of disbursement & provision of credits</h3>
                                <div className={styles.leftSub}><b>Payment</b>
                                <br/>
                                <br/>
                                We offer various payment methods, some via payment service providers such as PayPal, to process the payment of credits that you receive through participation in surveys in or via our app. 
                                Processed data in this context are usage data, connection data, master data, payment data, contact data or also contract data. The legal basis for the use of the payment service providers 
                                results from Art. 6 para. 1 lit. b DSGVO, as well as from our legitimate interests according to Art. 6 para. 1 lit. f) DSGVO to enable a user-friendly and uncomplicated payment processing. 
                                However, please note: Personal data may also be passed on by the online payment service provider to service providers, subcontractors or other affiliated companies, insofar as this is 
                                necessary for the fulfilment of the contractual obligations arising from your order or the personal data is to be processed on your behalf. We have signed an order processing agreement 
                                with each of the payment service providers to ensure that the security of the processing of your data is guaranteed at all times.
                                <br/>
                                <br/>
                                The recipient is the respective service provider, such as: PayPal (Europe) S.à.r.l. & Cie. S.C.A. A transfer of data to a third country may take place. The data is deleted as soon as 
                                it is no longer required to achieve the purpose for which it was collected. Furthermore, the data will be deleted if you revoke your consent or request the deletion of the personal data.
                                <br/>
                                <br/>
                                The payment service providers are in detail:
                                <br/>
                                <br/>
                                <b>PayPal</b>
                                <br/>
                                <br/>
                                It is possible to process the payment process with the online payment service PayPal. PayPal enables online payments to be made to third parties. The European operating company of PayPal 
                                is PayPal (Europe) S.à.r.l. & Cie. S.C.A., 22-24 Boulevard Royal, 2449 Luxembourg. If you choose PayPal as your payment method, your data required for the payment process will be 
                                automatically transmitted to PayPal. This regularly involves the following data:
                                <br/>
                                <br/>
                                Name, address, company, e-mail address, telephone and mobile number, IP address. The data transmitted to PayPal may be passed on by PayPal to credit agencies. The purpose of this 
                                transmission is to check your identity and creditworthiness. PayPal may also pass on your data to third parties insofar as this is necessary for the fulfilment of contractual obligations 
                                or the data is to be processed on behalf of PayPal. You can read PayPal’s privacy policy at https://www.paypal.com/de/webapps/mpp/ua/privacy-full/. The legal basis for the data processing 
                                is Art. 6 (1) lit. b DSGVO, as the processing of the data is necessary for the payment with PayPal and thus for the performance of the contract.
                                <br/>
                                <br/>
                                If you make a payment with PayPal, please check that you are responsible for paying taxes according to the laws in your country/region.
                                <br/>
                                <br/>
                                <b>Vouchers</b>
                                <br/>
                                <br/>
                                You can also exchange the credits you receive for taking surveys in or through our app for vouchers from our partners, such as StarBucks, Amazon, Zalando, iTunes, Spotify, etc. If you 
                                decide to do this, we will not pass on any of your personal data to our partners. We have interfaces to the Amazon API and Wunschgutschein API.
                                <br/>
                                <br/>
                                </div>

                            <h2>2. Data sharing and transfer</h2>

                                <h3>2.1 Sharing on the basis of your consent</h3>
                                <div className={styles.leftSub}><b>Our app is for marketing purposes and is ad-supported. As we use Google AdMob and YouTube to display personalised ads and partner videos within the app, 
                                you consent to the transfer of your personal data such as the advertising ID of your device, the IP address, your location data, your interactions with advertisers’ ads via cookies or 
                                cookie-like technologies (so-called mobile identifiers, e.g. Google AdMob and YouTube). mobile identifier, e.g. Web Beacon, IDFA, GAID) to Google Ireland Limited, Ireland, as the 
                                provider of Google AdMob and YouTube, as well as to the Google partner companies named below (hereinafter referred to as advertising partners) for the purpose of generating and displaying 
                                personalised advertising.</b>
                                <br/>
                                <br/>
                                In the case of Google AdMob, conversion statistics are created for AdWords customers (advertising partners) who have opted for conversion tracking via cookie-like technologies (so-called 
                                mobile identifiers). Mobile identifiers are stored on your end device and enable the storage of information with which your surfing behaviour can be tracked. The advertising partners thus 
                                learn the total number of users who clicked on their ad and were redirected to a page marked with a conversion tracking tag. However, they do not receive any information that can be used 
                                to personally identify users.
                                <br/>
                                <br/>
                                When clicking on a partner video, we use the YouTube service. We use the extended data protection mode, which, according to the provider, only starts storing user information when the 
                                video(s) is/are played. If the playback of embedded YouTube videos is started, Google uses “YouTube” cookies or mobile identifiers to collect information about user behaviour. According 
                                to information from “Youtube”, these are used, among other things, to collect video statistics, to improve user-friendliness and to prevent abusive behaviour. If you are logged in to 
                                Google, your data is directly assigned to your account when you click on a video.
                                <br/>
                                <br/>
                                We have no influence on the data processing by Google after clicking on a partner video / an advertisement. The data processing is then the sole responsibility of Google Ireland Limited.
                                <br/>
                                <br/>
                                Details of what data Google collects and how it is processed can be found here:
                                <br/>
                                <br/>
                                <b>Admob: https://policies.google.com/technologies/ads</b>
                                <br/>
                                <br/>
                                <b>YouTube and other Google services: https://policies.google.com/privacy</b>
                                <br/>
                                <br/>
                                This application also uses the Lucid router link. Lucid is an online survey platform through which anyone can conduct surveys. Lucid works with publishers of applications for smartphones 
                                to gain access to users of such applications and to address questionnaires to them. When a user connects to this app, a certain set of the user’s device data (including the advertising 
                                ID, the device ID if the app user has enabled access to their advertising and/or device ID either through their system settings or through a consent query displayed to them) and other 
                                response metadata is automatically sent to Lucid’s servers through our app so that Lucid can determine whether the user is eligible for a survey. Lucid is a US-based company, so you 
                                expressly consent to the transfer of this data to the US. Lucid collects and processes your data in accordance with all applicable GDPR requirements. For a full list of the data Lucid 
                                receives through this app and for more information on how Lucid processes this data, please carefully read Lucid’s respondent terms and conditions at https://luc.id/legal/privacy-policy/. 
                                This data will be associated with your responses to questionnaires when Lucid sends such questionnaires to eligible users. Your data may be transferred by Lucid to non-EEA countries in 
                                accordance with all applicable GDPR requirements, including the use of the EU Commission’s standard contractual clauses. Lucid may share this data with third parties, customers and 
                                business partners for commercial purposes. By downloading the application, you accept this Privacy Policy and hereby give your consent to the processing of the above data by Lucid. 
                                Furthermore, you are informed that you can deactivate the operation of Lucid at any time via the following link: https://luc.id/legal/privacy-policy/ & 
                                https://optout.aboutads.info/?c=2&lang=EN. We invite you to read the Lucid Terms of Use again if you would like to have a more detailed insight into how Lucid works and 
                                who Lucid shares your data with.
                                <br/>
                                <br/>
                                The Application furthermore uses AWIN. Awin is a specialized affiliate marketing platform. It connects advertisers with a network of publishers. Awins positions itself as a trusted 
                                third party between advertisers and publishers providing account management, strategy and technology. In the process of doing so it is gathering data and thus needs the consent to cookies.
                                <br/>
                                <br/>
                                Details about what data is collected by Awin and how it is processed can be found here:
                                <br/>
                                <br/>
                                <b>https://www.awin.com/de/datenschutzerklarung#section_endverbraucher-bzw-</b>
                                <br/>
                                <br/>
                                nutzerhttps://privacy.awin.com/
                                <br/>
                                <br/>

                                <a>Note:</a>
                                <br/>
                                <br/>
                                <b>In this respect, we would like to point out once again in all clarity that the purpose of our service / our app is the evaluation of your surfing behavior by processing your data in order 
                                to use this data for the purpose of online marketing in so-called advertising networks. “Online marketing” includes, in particular, the referral of the user of the app to advertising 
                                partners of us and the interaction with advertising materials and surveys provided by advertising partners in the app and through links. Your data will not only be evaluated and used by 
                                us, but also by third parties such as Google Ireland Limited, Lucid Holdings LLC. and our advertising partners.
                                <br/>
                                <br/>
                                If you want to disable personalized advertising on your mobile device, you can disable interest-based advertising when using Android smartphones (Google Setting => Setting => Google => 
                                Display => Disable interest-based advertising).
                                </b>
                                <br/>
                                <br/>
                                In this case, however, certain features of our app will no longer be usable. The same applies to deactivating the operation of Lucid.
                                <br/>
                                <br/>
                                If you do not wish to be associated with your YouTube profile, you must log out before clicking on the video. You also have the right to object to the creation of these user profiles, 
                                whereby you must contact YouTube to exercise this right.
                                </div>

                                <div className={styles.leftBox}>
                                    <div className={styles.leftBoxText}><b>You can revoke your consent at any time with effect for the future by sending a short email to hello@smatched.de. In this case, however, participation 
                                        in campaigns (surveys, videos, news, etc.) and the receipt of rewards are no longer possible.
                                        <br/>
                                        <br/>
                                        We would like to point out that rewards are only due once a certain number of “Smatches” points has been reached. If the user revokes his/her consent to data processing before 
                                        reaching this number of points, the premium can no longer be distributed.
                                        </b></div>
                                </div>
                                <br/>
                                <div className={styles.leftSub}>The legal basis for the forwarding and transfer of data is – in addition to the legal bases mentioned below – your consent, Art. 6 para. 1 lit. a) DSGVO.</div>

                                <h3>2.2 Disclosure without explicit consent</h3>
                                <div className={styles.leftSub}>In addition to the cases explicitly mentioned in this data protection declaration, your personal data will only be passed on without your express prior consent 
                                if this is permitted or required by law. A technical transfer may also take place if and to the extent that this is necessary for the operation of our app or for other reasons for the 
                                establishment, implementation or processing of your user relationship with us. This may be the case, for example, if we host the app with an external service provider. If this is not a case 
                                of commissioned processing, the transfer is based on Art. 6 para. 1 lit. b) DSGVO.
                                <br/>
                                <br/>
                                <b>2.2.1</b> As a matter of principle, we do not pass on to third parties the personal data that you provide when registering.
                                <br/>
                                <br/>
                                <b>2.2.2</b> The data that we receive from you when you redeem / order a premium (first name, surname, address) will only be passed on to the company delivering the premium for the purpose of 
                                sending the premium. This transfer of your data is justified by the fact that (1) the transfer of the data is necessary for the fulfilment of the contract between you as the data subject and 
                                us in accordance with Art. 6 Para. 1 lit. b) DSGVO for the use of the app, as we would otherwise not be able to send you the rewards. (2) We also have a legitimate interest within the meaning 
                                of Art. 6 (1) (f) DSGVO in sending you the rewards by way of a so-called drop shipment (i.e. directly from the manufacturer of the rewards, e.g. from the brewery). In this respect, your 
                                rights and freedoms do not outweigh our legitimate interests in the delivery of the rewards.
                                <br/>
                                <br/>
                                <b>2.2.3</b> Irrespective of your consent referred to in section 2.2, we also disclose your personal data, such as your advertising ID, to our advertising partners and the aforementioned third 
                                parties on the basis of a legitimate interest within the meaning of Article 6(1)(f) and on the basis of the user agreement concluded with us pursuant to Article 6(1)(b) of the Data Protection 
                                Regulation. Since we offer our app free of charge, we have a legitimate interest in using marketing tools such as Google AdMob. This interest also outweighs the interests of the user, as it is 
                                up to each user whether they want to use our app and participate in promotions, surveys, games, etc.
                                <br/>
                                <br/>
                                <b>2.2.4</b> If it is necessary to clarify an illegal or abusive use of the app or for legal prosecution, personal data will be forwarded to law enforcement agencies or other authorities and, 
                                if applicable, to injured third parties or legal advisors. However, this only happens if there are indications of unlawful or abusive behaviour. A transfer may also take place if this serves 
                                the enforcement of terms of use or other legal claims. We are also legally obliged to provide information to certain public authorities upon request. These are law enforcement agencies, 
                                authorities that prosecute administrative offences subject to fines and the tax authorities.
                                <br/>
                                <br/>
                                Any disclosure of personal data is justified by the fact that (1) the processing is necessary for compliance with a legal obligation to which we are subject pursuant to Art. 6 para. 1 lit. f) 
                                DSGVO in conjunction with. national legal requirements to disclose data to law enforcement authorities, or (2) we have a legitimate interest in disclosing the data to the aforementioned third 
                                parties if there are indications of abusive behaviour or to enforce our terms of use, other conditions or legal claims, and your rights and interests in the protection of your personal data 
                                within the meaning of Art. 6 para. 1 lit. f) DSGVO are not overridden.
                                <br/>
                                <br/>
                                <b>2.2.5</b> We rely on the following third party companies and external service providers to provide our service:
                                <br/>
                                <br/>
                                Transport and logistics companies, such as DHL, etc.
                                <br/>
                                <br/>
                                Technical support: Antony Konstantinidis,
                                <br/>
                                <br/>
                                Google Ireland Limited, Ireland. (Google AdMob / YouTube)
                                <br/>
                                <br/>
                                Lucid LLC., USA a company of Cint AB – https://www.cint.com/privacy-policy
                                <br/>
                                <br/>
                                Awin AG, Germany – https://www.awin.com/de/datenschutzerklarung
                                <br/>
                                <br/>
                                Twillio Germany GmbH – https://www.twilio.com/legal/privacy
                                <br/>
                                <br/>
                                Sentry.io represented by Functional Software Inc. – https://sentry.io/privacy/
                                <br/>
                                <br/>
                                VPNAPI – https://vpnapi.io/privacy-policy
                                <br/>
                                <br/>
                                Amazon.de Gutscheine represented by Amazon EU SARL, 38 avenue J.F. Kennedy, L-1885, Luxembourg.
                                <br/>
                                <br/>
                                Wunschgutschein GmbH – https://www.wunschgutschein.de/web/dataprot_de_DE
                                <br/>
                                <br/>
                                AppsFlyer Ltd – https://www.appsflyer.com/legal/privacy-policy/
                                <br/>
                                <br/>
                                Hoster: Hetzner Online GmbH, 91710 Gunzenhausen.<br/>Any disclosure of personal data is justified by the fact that (1) this is either necessary for the implementation of the user relationship, 
                                Art. 6 para. 1 lit. b) or (2) we have a legitimate interest in the data processing, Art. 6 para. 1 lit. f) or we have carefully selected our third-party companies and external service providers 
                                as processors within the framework of Art. 28 para. 1 DSGVO, regularly checked them and contractually obliged them to process all personal data exclusively in accordance with our instructions.
                                <br/>
                                <br/>
                                <b>2.2.6</b> As part of the development of our business, the structure of our company may change by changing its legal form, establishing, buying or selling subsidiaries, parts of companies or 
                                components. In such transactions, customer information may be transferred along with the part of the business being transferred. In any transfer of personal information to third parties to the 
                                extent described above, we will ensure that it is done in accordance with this Privacy Policy and applicable data protection law.
                                <br/>
                                <br/>
                                Any disclosure of personal data is justified by the fact that we have a legitimate interest in adapting our corporate form to the economic and legal circumstances as required and that your 
                                rights and interests in the protection of your personal data within the meaning of Article 6 (1) (f) of the Data Protection Regulation are not overridden.
                                <br/>
                                <br/>

                                </div>

                                <h3>2.3 Essential tools and tracking tools</h3>

                                <div className={styles.leftSub}><b>VPNAPI</b></div>
                                <div className={styles.leftSub}>Our app uses VPNAPI to prevent users who attempt to access the app using VPNs from disguising their IP address and mistakenly receiving surveys from another country.
                                <br/>
                                <br/>
                                </div>
                                <div className={styles.leftSub}><b>Sentry</b></div>
                                <div className={styles.leftSub}>Smatched uses Sentry to send error messages from the backend and thus quickly identify and fix bugs, etc.
                                <br/>
                                <br/>
                                </div>
                                <div className={styles.leftSub}><b>Twillio</b></div>
                                <div className={styles.leftSub}>Twillio is a cloud communication platform that can be used to serve channels such as SMS, telephony, video, WhatsApp and more. Smatched uses Twillio’s two-factor 
                                authentication via SMS, which asks for the user’s mobile number for authentication purposes and to prevent the use of multiple accounts.
                                <br/>
                                <br/>
                                </div>
                                <div className={styles.leftSub}><b>Appsflyer</b></div>
                                <div className={styles.leftSub}>Our App uses AppsFlyer, an attribution service provided by AppsFlyer Ltd, 14 Maskit St., POB 12371 Herzliya, Israel (“AppsFlyer”). We have entered into a commissioned 
                                processing agreement with AppsFlyer for the use of AppsFlyer (Article 28(3) of the GDPR)
                                <br/>
                                <br/>
                                AppsFlyer processes personal data on our behalf in order to create aggregated user profiles about the interaction with our advertising materials. The information obtained in this way enables us to 
                                measure the success of our app marketing campaigns and optimise our app. In addition, AppsFlyer enables us to ensure the security and defence against fraud by advertising networks.
                                <br/>
                                <br/>
                                The following data is transmitted to Appsflyer: Your device’s IP address and associated location data, the campaign source and associated targeting, and various smatched events after the app is installed.
                                <br/>
                                <br/>
                                However, by activating the IP anonymisation “IP Masking”, your IP address is shortened beforehand by AppsFlyer.
                                <br/>
                                <br/>
                                The recipient of the data in this context is AppsFlyer Ltd, 14 Maskit St, POB 12371 Herzliya, Israel. The European Commission has determined by decision that an adequate level of protection for 
                                personal data is ensured in Israel (Art. 45 GDPR).
                                <br/>
                                <br/>
                                Further information on data protection at Appsflyer can be found at the following link https://www.appsflyer.com/privacy-policy/.
                                <br/>
                                <br/>
                                The legal basis for the use of AppsFlyer is your consent (opt-in in the cookie banner), provided that you have given this to us during your first visit to our app. The legal basis for the integration 
                                of AppsFlyer therefore results from Art. 6 para. 1 lit. a DSGVO. Based on your consent, we use cookies to store and read personal data on your terminal device. If you have not given us consent to use 
                                AppsFlyer (no opt-in in the cookie banner), we will not use AppsFlyer in the context of your visits to our app.
                                <br/>
                                <br/>
                                You have the option to revoke your consent to data processing at any time. A revocation has no influence on the effectiveness of the previous data processing. If you do not want AppsFlyer to collect 
                                and process data, you can download an opt-out cookie via the following link: https://www.appsflyer.com/optout.
                                <br/>
                                <br/>
                                The data will be deleted as soon as it is no longer necessary to achieve the purpose for which it was collected. Furthermore, the data will be deleted if you withdraw your consent or request the 
                                deletion of personal data.
                                <br/>
                                <br/>
                                If you delete your cookies, you will also have to download the opt-out cookie again.
                                <br/>
                                <br/>
                                </div>

                               


                            <h2>3. Forwarding to third parties</h2>

                                <div className={styles.leftSub}>In addition, you will be redirected to third parties who are responsible for data processing when you click on or download third-party content. This content is 
                                marked as third-party content. It may be external links in messages, apps from third parties, tasks from third parties, etc..
                                <br/>
                                <br/>
                                You are leaving our app.
                                <br/>
                                <br/>
                                </div>

                            <h2>4. Use of cookies</h2>

                                <div className={styles.leftSub}>We use so-called cookie technology in our app. Cookies are small text files that are sent from our server to your smartphone when you use the app and are stored 
                                there for later retrieval. We use both so-called session cookies (also referred to as temporary cookies) and cookies that are stored for a longer period of time (also referred to as persistent 
                                cookies).
                                <br/>
                                <br/>
                                We use cookies to continue to identify your smartphone during your app use, but also to detect the end of your use and to be able to recognise your device when you use it again.                              
                                <br/>
                                <br/>
                                You delete the cookies by deleting the smatched app from your smartphone.
                                <br/>
                                <br/>
                                As explained in section 2, Google also uses cookie-like technologies. If you do not want to allow tracking, you must either revoke your consent or delete our app.
                                <br/>
                                <br/>
                                </div>
                                
                            <h2>5. Changes of purpose</h2>

                                <div className={styles.leftSub}>Processing of your personal data for purposes other than those described will only take place if permitted by law or if you have consented to the changed purpose 
                                of the data processing. In the event of further processing for purposes other than those for which the data was originally collected, we will inform you about these other purposes prior to further processing and provide you with all other relevant information.
                                <br/>
                                <br/>
                                </div>
                                
                            <h2>6. Data retention period</h2>

                                <div className={styles.leftSub}>We will delete or anonymise your personal data as soon as it is no longer necessary for the purposes for which we collected or used it in accordance with the above paragraphs. As a rule, we store your personal data for the 
                                duration of the usage or contractual relationship via the app plus a period of 7 days, during which we keep backup copies after deletion, unless this data is required for longer for criminal prosecution or to secure, assert or enforce legal claims.
                                <br/>
                                <br/>
                                Specific statements in this privacy policy or legal requirements for the retention and deletion of personal data, in particular data that we are required to retain for tax reasons, remain unaffected.
                                <br/>
                                <br/>
                                </div>


                            <h2>7. Your rights as a data subject</h2>

                                <h3>7.1 Right of access</h3>
                                <div className={styles.leftSub}>You have the right to ask us to correct personal data relating to you without delay if it is inaccurate. To do so, please contact us at the addresses below.
                                <br/>
                                <br/>
                                </div>

                                <h3>7.2 Right to rectify inaccurate data</h3>
                                <div className={styles.leftSub}>You have the right to ask us to correct personal data relating to you without delay if it is inaccurate. To do so, please contact us at the addresses below.
                                <br/>
                                <br/>
                                </div>

                                <h3>7.3 Right to erasure</h3>
                                <div className={styles.leftSub}>You have the right to ask us to correct personal data relating to you without delay if it is inaccurate. To do so, please contact us at the addresses below.
                                <br/>
                                <br/>
                                </div>

                                <h3>7.4 Right to restriction of processing</h3>
                                <div className={styles.leftSub}>You have the right to request that we delete the personal data relating to you under the conditions described in Article 17 of the GDPR. These conditions 
                                provide in particular for the right to erasure if the personal data are no longer necessary for the purposes for which they were collected or otherwise processed, as well as in cases of 
                                unlawful processing, the existence of an objection or the existence of an erasure obligation under Union law or the law of the Member State to which we are subject. For the period of 
                                data storage, please also see section 6 of this privacy policy. To exercise your right to erasure, please contact us at the addresses below.
                                <br/>
                                <br/>
                                </div>

                                <h3>7.5 Right to data portability</h3>
                                <div className={styles.leftSub}>You have the right to receive from us the personal data relating to you that you have provided to us in a structured, commonly used, machine-readable 
                                format in accordance with Article 20 of the GDPR. To exercise your right to data portability, please contact us at the addresses below.
                                <br/>
                                <br/>
                                </div>

                                <h3>7.6 Right of objection</h3>
                                <div className={styles.leftSub}><b>You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is 
                                carried out, inter alia, on the basis of Article 6(1)(e) or (f) DSGVO, in accordance with Article 21 DSGVO. We will stop processing your personal data unless we can demonstrate 
                                compelling legitimate grounds for the processing which override your interests, rights and freedoms, or if the processing serves the purpose of asserting, exercising or defending 
                                legal claims. In the event of objection, you will no longer be able to use the app.</b>
                                <br/>
                                <br/>
                                </div>

                                <h3>7.7 Right to withdraw consent given</h3>
                                <div className={styles.leftSub}><b>If you have given us consent to data processing, you can revoke this at any time with effect for the future via the menu item “Profile” => “Settings” => 
                                “Revoke consent” or our contact details given in the imprint. The use of the app is no longer possible after the revocation.</b>
                                <br/>
                                <br/>
                                </div>

                            <h2>8. Right of appeal</h2>

                                <div className={styles.leftSub}>You also have the right to complain to the relevant supervisory authority. You can find a list of supervisory authorities here:
                                <br/>
                                <br/>
                                https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node
                                </div>

                            <h2>9. Contact</h2>

                                <div id="" className={styles.leftSub}>If you have any questions or comments about our handling of your personal data, or if you wish to exercise your rights as a data subject, please contact 
                                Rissland Marketing UG (hb), Mr Alexander Rissland at the following contact details: Kurfürsten-Anlage 52 in 69115 Heidelberg, Email: alex@smatched.de
                                </div>
                                
                            <h2>10. Protection of your data</h2>

                                <div className={styles.leftSub}>In order to protect your data from manipulation, loss and unauthorised access by third parties, for example, we use technical and organisational measures 
                                to ensure an appropriate level of protection for your personal data. These measures include the use of firewalls and antivirus programs as well as manual security precautions. We 
                                continuously review and improve our security measures in line with the current state of the art. In addition, in accordance with the principle of “data protection by default”, the 
                                strictest privacy settings are preset when you first register.
                                </div>
                            <h2>11. Changes to this Privacy Policy</h2>

                                <div className={styles.leftSub}>We always keep this privacy policy up to date. Therefore, we reserve the right to change it from time to time and to update any changes in the collection, 
                                processing or use of your data. The current version of the privacy policy is always available under “Settings” > “Privacy” within the app.
                                <br/>
                                <br/>
                                Status: 28th of July 2022

                                </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Home mobile responsiveness */}

            <div className={styles.mobileFirstHomeContainer}>
                <div className={styles.topFirst}>
                <div className={styles.mobileTopFirstBg}>
                    <div className={styles.mainFirstMobile}>
                    <div className={styles.leftMainMobile}>
                        <div className={styles.leftImgInfoMobile}>
                        <img
                            className={styles.leftImgMobile}
                            src="./smatchedlogo.png" 
                            alt='The smatched logo' 
                        />
                        </div>
                    </div>
                    <div className={styles.rightMainMobile}>
                        <h1 className={styles.textMobile}>
                        Imprint
                        </h1>
                        <h2 className={styles.text2Mobile}>Smatched</h2>
                        <div className={styles.paragMobile}>
                        <div className={styles.innerParagMobile}>
                                A brand of Rissland Marketing UG (limited liability) <br/>
                                Seat of the company: Kurfürsten Anlage 52, 69115 Heidelberg<br/>
                                Germany<br/>
                                <br/>
                                Mannheim Local Court: HRB 728803<br/>
                                Managing Director: Alexander Rißland<br/>
                                Umsatzsteuer ID-Nr.: DE283249761523<br/>
                                Email: hello@smatched.de<br/>
                                Tel: +49 1525 780 5326<br/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            
        </div>

    )
}

export default DataPrivacy;