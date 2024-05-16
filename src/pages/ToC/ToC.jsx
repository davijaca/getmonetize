import React, { useState } from 'react';
import styles from './ToC.module.css';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import Booking from '../Booking/Booking.jsx';

const ToC = () => {
  // CONTACT FORM POPUP

  const [showBookingForm, setShowBookingForm] = useState(false);
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

  {
    /* SEO SECTION - DO NOT TOUCH */
  }

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

  {
    /* END OF SEO SECTION */
  }

  return (
    <div className={styles.homeContainer}>
      {/* SEO SECTION - DO NOT TOUCH */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Table of Contents</title>
        <link rel="canonical" href="https://www.smatched.io/" />
        <link rel="canonical" href="https://www.offerwallmonetization.com/" />
      </Helmet>

      <div style={{ display: 'none' }}>
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
              <h1 className={styles.text}>ToC</h1>
              <div className={styles.list}>
                <ul>
                  <li>Preamble</li>
                  <li>Information on the processing of your data</li>
                  <li>Information collected during download</li>
                  <li>Information collected automatically</li>
                  <li>Creation of a user account (registration) and login</li>
                  <li>Using the app</li>
                  <li>Processing of disbursement & provision of credits</li>
                  <li>Data sharing and transfer</li>
                  <li>Sharing on the basis of your consent</li>
                  <li>Disclosure without explicit consent</li>
                  <li>Essential tools and tracking tools</li>
                  <li>Forwarding to third parties</li>
                  <li>Use of cookies</li>
                  <li>Changes of purpose</li>
                  <li>Data Retention Period</li>
                  <li>Your rights as a data subject</li>
                  <li>Right of access</li>
                  <li>Right to rectify inaccurate data</li>
                  <li>Right to erasure</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to data portability</li>
                  <li>Right of objection</li>
                  <li>Right to withdraw consent given</li>
                  <li>Right of appeal</li>
                  <li>Contact</li>
                  <li>Protection of your data</li>
                  <li>Changes to this Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className={styles.leftMain}>
              <h2>1. Scope</h2>

              <div className={styles.leftSub}>
                1. The following General Terms and Conditions (hereinafter
                referred to as “GTC“) apply <b>to</b> all business relationships
                of Rissland Marketing UG (hereinafter referred to as “
                <b>smatched</b>”) <b>with its</b> registered office at
                Kurfürsten-Anlage 52 in 69115 Heidelberg, Germany, represented
                by the Managing Director Alexander Rissland, via the internet
                presence at smatched.de (hereinafter referred to as the “
                <b>Website</b>”) and the listed apps under the name Smatched in
                the Google Play Store and App Store (hereinafter jointly
                referred to as the “<b>Apps</b>“).
              </div>
              <div className={styles.leftSub}>
                2. Deviating, conflicting or supplementary terms and conditions
                shall not become part of the contract, even if known, unless
                their validity is expressly agreed. The version valid at the
                time of the conclusion of the contract shall be decisive in each
                case.
              </div>

              <h2>2. Contractors</h2>

              <div className={styles.leftSub}>
                1. These TOS apply to all legal transactions between Rissland
                Marketing UG, hereinafter “Smatched/Rissland Marketing UG” or
                “we”, and its contractual partner, hereinafter “user” or “you”,
                that are concluded via Smatched.
              </div>
              <div className={styles.leftSub}>
                2. These TOS apply regardless of whether you act as a consumer,
                entrepreneur or merchant. Should there be any legal
                particularities vis-à-vis consumers, we will point this out to
                you in these TOS.
              </div>
              <div className={styles.leftSub}>
                3. A consumer is any natural person who enters into a legal
                transaction for purposes that can predominantly be attributed
                neither to his or her commercial nor to his or her independent
                professional activity (Section 13 of the German Civil Code,
                definition under German law). An entrepreneur is a natural or
                legal person or a partnership with legal capacity who, when
                concluding a legal transaction in.
              </div>

              <h2>3. Procedure</h2>

              <div className={styles.leftSub}>
                The app “Smatched” gives people aged 16 and over the opportunity
                to create an account free of charge. After registering, they can
                start so-called “smatching” rounds in which they are presented
                with personal questions, advertising formats and surveys. In
                return, they receive digital points (so-called “coins”), which
                have no monetary value but can be exchanged for rewards.
              </div>

              <h2>4. Registration</h2>

              <div className={styles.leftSub}>
                Participation in certain Smatched promotions and the redemption
                of available points (coins) in some apps require registration.
                Registration is free of charge. Only natural persons with
                unlimited legal capacity are eligible to participate. Minors are
                excluded from participation. Smatched reserves the right to
                request a copy of an official identification document of a
                participant. Participation is only allowed for private purposes.
                Only one user account may be opened per person. The user account
                is not transferable.
                <br />
                <br />
                To register, the registration form provided in the app must be
                filled out and submitted to Smatched by “clicking” on the
                registration button there (data connection required, see below).
                All data required for registration, including a valid e-mail
                address, must be provided completely and truthfully by the
                participant. Only then the registration process is completed and
                the participant is assigned his personal user account, in which
                he can log in in the future by entering his personal access
                data. If the participant’s personal details change, he is
                obliged to update them. The changes can be made via the personal
                user account.
                <br />
                <br />
                There is no right to registration. Smatched is entitled to
                refuse registration without giving reasons.
                <br />
                <br />
                Participants are free at any time to request the deletion of
                their registration data and user account in writing or in text
                form at hello@smatched.de and thus terminate their
                participation.
              </div>

              <h2>5. Technical requirements, costs</h2>

              <div className={styles.leftSub}>
                Participation in Smatched requires the installation of a
                Smatched App on a suitable end device of the Participant as well
                as the installation of any available updates (see clause 5).
                <br />
                <br />
                Clarification: Participation is only possible with the version
                of the mobile app offered in the official app stores of Apple
                and Android. Coins collected with a non-up-to-date app version
                or entries in competitions are invalid and may not be taken into
                account (no exchange of Coins for rewards possible and no chance
                to win prizes in competitions).
                <br />
                <br />
                The use of the apps in so-called emulators is explicitly
                excluded. Emulators are programs that simulate the behavior of
                an Android or Apple smartphone. Experience has shown that these
                emulators do not correctly display the advertisements of
                Smatched’s advertisers and, in addition, modified apps are often
                played. The use of an emulator thus constitutes a breach of the
                rules, which gives Smatched the right to exclude the participant
                and block the user account. Any Coins collected will be
                forfeited in this case.
                <br />
                <br />
                The installation of the Apps and the updates as well as the use
                of the integrated services require Internet access including
                regular data transmission between the Participant’s terminal
                device and Smatched.
                <br />
                <br />
                The provision and maintenance of Internet access including data
                transmission on the part of the Participant are not part of the
                Smatched Services. The connection costs incurred by the
                Subscriber in the course of the data transmission shall be borne
                by the Subscriber. The amount of these costs depends on the
                existing contract between the subscriber and his mobile phone
                provider. The scope and frequency of the data transmissions
                depend on the specific use by the subscriber.
                <br />
                <br />
                The provision of the Smatched services by Rissland Marketing UG
                is free of charge to the participant.
              </div>

              <h2>
                6. Collecting, managing and redeeming Coins, expiration of Coins
              </h2>

              <div className={styles.leftSub}>
                Smatched offers subscribers in some mobile apps the opportunity
                to earn Coins by taking advantage of shopping offers, surveys,
                sweepstakes promotions, etc. to collect Coins. The participant
                can view and manage these coins in his personal user account and
                redeem them for rewards. The rewards offered in each case can
                only be accessed via the respective app. The dispatch of rewards
                can take up to 4 weeks after processing by Smatched Support in
                case of bottlenecks. If the use of the app is not possible,
                please contact hello@smatched.de.
                <br />
                <br />
                The apps as well as the website of Rissland Marketing UG offer
                the participant the opportunity to interact with all possible
                forms of advertisements such as: Video advertising (pre-roll,
                mid-roll, post-roll, viral videos), advertising for other apps
                (so-called downloads/installs), surveys, advertising for other
                competitions, registrations for newsletters, test drives,
                product samples, etc. as well as the direct purchase of products
                of the advertisers (e.g. mobile phone contracts, lottery
                tickets, clothing, video on demand, etc.) o collect Coins.
                <br />
                <br />
                The prerequisite for receiving coins for all forms of video
                advertising is that the clip is viewed in its entirety and is
                not technically suppressed or fast-forwarded. For surveys, the
                prerequisite for receiving coins is the conscientious and
                truthful answering of the surveys, which can be entered via
                smatched but also by partners. In the case of App installations,
                Coins will only be received if the App is installed for the
                first time on the device on which the Smatched App is also
                operated. In case of participation in competitions of Smatched’s
                advertisers as well as all forms of registrations (newsletter,
                test drives, etc.) the participant only receives Coins for the
                first participation / registration, whereby a further
                prerequisite is that all data required by the advertiser have
                been entered correctly and, if applicable, confirmed by e-mail
                (so-called double opt-in).
                <br />
                <br />
                The participant is free to recommend the smatched app to friends
                and acquaintances using the Invite Friends feature. A user
                receives a link that he can send. The invited person downloads
                the smatched app and plays a complete round of smatched. Only
                after fulfilling this requirement, the invited person as well as
                the participant who invited the person will be credited with 50
                coins each. However, this feature is limited to 10 invited
                friends. If there are any problems with the crediting, the
                participant can contact hello@smatched.de.
                <br />
                <br />
                Only when the advertising customer confirms to Smatched that the
                participant has used the advertising measure correctly, will the
                participant receive the Coins. If it turns out afterwards that
                the above mentioned requirements were not met, e.g. because
                video advertising was suppressed or fast-forwarded, or false or
                incomplete information was given during registration, or the
                Participant received Coins for other reasons contrary to or
                without meeting the above described requirements, this can lead
                to the exclusion of the Participant from Smatched and to the
                confiscation of all Coins of the Participant without
                compensation.
                <br />
                <br />
                In the case of all Coins which the participant receives as a
                result of the purchase of products or the conclusion of
                contracts, it applies that the remuneration is only paid after
                confirmation of the finally effective conclusion of the contract
                by the advertising customer and the expiry of all revocation and
                objection periods. A crediting of Coins can take 12 weeks in
                individual cases. As a rule, the crediting takes place within 30
                days.
                <br />
                <br />
                The following applies in principle: All content in the app and
                on the associated website has an advertising character or is
                advertising. The offers of Rissland Marketing UG (app and
                website) are advertising media. The responsibility for the
                proper implementation and verification of the advertising
                measures lies with the advertising customers of Smatched. Only
                if Smatched is remunerated for the use of advertising by a
                participant, a claim to Coins also arises. If Rissland Marketing
                UG is not remunerated by an advertising customer, because in the
                opinion of the advertising customer there was no contractual use
                of the advertising measure, then the participant has no claim to
                receive the Coins. Rissland Marketing UG is not obliged to
                examine the justification of objections raised by advertising
                customers against the remuneration and to legally enforce an
                alleged or actual remuneration claim against the advertising
                customer. The participant shall clarify any conflicting opinions
                regarding the advertiser’s obligation to pay remuneration with
                the advertiser himself. Rissland Marketing UG will endeavour to
                support the participant in clarifying the facts.
                <br />
                <br />
                For certain advertising measures, special provisions apply,
                which will be displayed to the Participant in each case. In the
                relationship between Smatched and the Participant, the terms and
                conditions of use and participation of Smatched apply primarily.
                In case of use of an advertising offer by the Participant, the
                terms and conditions of the advertiser apply.
                <br />
                <br />
                Coins are not transferable to third parties. Smatched expressly
                reserves the right to cancel Coins in the event of incorrect
                bookings and misuse.
                <br />
                <br />
                Collected Coins expire 12 months after the end of the month in
                which the Coins were redeemed (for termination of participation,
                however, see section 7).
              </div>

              <h2>7. Competitions and raffles</h2>

              <div className={styles.leftSub}>
                1. a) Competitions and raffles are carried out by smatched.
                Partially these are offered in cooperation with advertising
                partners and may include advertising messages provided by
                advertising partners. Only Smatched and the advertising partners
                and sponsors explicitly named in the respective raffle are
                involved in raffles.
                <br />
                <br />
                2. b) Only natural persons over the age of 18 who have properly
                registered with the respective app are eligible to participate
                in competitions. Employees of smatched and their relatives are
                excluded from participation. A full name and postal address is
                required to receive the prize. In order to be eligible to
                participate and win, it is mandatory that all personal data
                provided by the participant during registration is true. In case
                of false information Smatched is entitled to exclude the
                participant from the competition; an exclusion can also be
                declared retroactively, so that any winnings already received
                have to be returned to Smatched.
                <br />
                <br />
                (c) The prize draw shall be carried out by means of a random
                number generator.
                <br />
                <br />
                1. d) The winners will be notified by name after the conclusion
                of the prize draw by e-mail or In-App Message. For the purpose
                of processing the prize, smatched is entitled to release the
                name and address of the winner to the advertising partner, who
                in turn may release these to third parties, in particular to a
                carrier, for the purpose of processing the prize. This applies
                in the event that the competition is organised in cooperation
                with an advertising partner. Each participant expressly agrees
                to this form of publication and notification.
                <br />
                <br />
                2. e) If the winner does not declare his acceptance of the prize
                within two weeks after Smatched has sent the notification email,
                the claim to the prize expires.
                <br />
                <br />
                3. f) The claim to the prize is not assignable or otherwise
                transferable to third parties.
                <br />
                <br />
                4. g) The processing of the prize takes place via Smatched or
                via the respective advertising partner who has provided the
                prize. Within the Federal Republic of Germany the shipment is at
                the expense of Smatched or the advertising partner, any
                additional costs are to be borne by the winner. If the first
                delivery attempt is unsuccessful, the winner has to bear the
                possible costs of the further delivery. If a prize cannot be
                delivered to the winner within four weeks after Smatched has
                received the declaration of acceptance of the prize, the prize
                will be forfeited.
                <br />
                <br />
                If a prize is forfeited, the prize will, as far as the nature of
                the prize allows, e.g. in the case of non-cash prizes, either be
                offered again as a prize or another winner will be determined.
                The decision on this lies with smatched, alternatively with the
                advertising partner.
                <br />
                <br />
                1. h) If shipping is not possible due to the nature of the prize
                or if the shipping costs incurred for this are disproportionate
                and therefore unreasonable for Smatched or the advertising
                partner, the winner must collect the material prize from the
                registered office of the respective supplier or advertising
                partner or arrange for transport himself; this applies in
                particular to motor vehicles.
                <br />
                <br />
                2. i) If the prize is a trip or a service, the prize will be
                processed directly between the respective advertising partner or
                a service provider engaged by him or by smatched and the winner.
                If a certain date is not already given at the time of the offer,
                the date is reserved for smatched or the advertising partner or
                service provider. The winner has no right to claim a prize on a
                certain date; smatched or the advertising partner or the service
                provider will, however, make every effort to take into account
                the legitimate interests of the winner. With the confirmation of
                the date the winner is subject to the respective conditions of
                the executing company (e.g. travel conditions of the tour
                operator). The costs of travel to and from the starting point of
                the trip or the place of the service will be borne by the
                winner, unless otherwise expressly stated or agreed below. The
                same applies to costs incurred privately by the winner during
                the trip or service (e.g. minibar, telephone, etc.), unless they
                are expressly assumed by others.
                <br />
                <br />
                3. j) The place of performance for the processing of the prize
                is the registered office of the respective advertising partner
                who has offered the prize in kind or who provides the service
                offered.
                <br />
                <br />
                4. k) The legal process is excluded.
                <br />
                <br />
                5. l) Smatched is entitled to cancel and terminate competitions
                and raffles at any time without prior notice and without
                justification, especially if due to manipulations or
                malfunctions in the hardware and/or software or for other
                technical or legal reasons a proper execution of the competition
                or raffle can no longer be guaranteed. If a termination has
                become necessary due to the culpable behaviour of a Participant,
                Smatched is entitled to demand compensation from this
                Participant for the resulting damage.
              </div>

              <h2>8. Obligations of the participant, updates</h2>

              <div className={styles.leftSub}>
                1. a) The apps of Smatched and the contents provided therein are
                protected by copyright and, if applicable, by trademark law and
                are only intended for personal non-commercial use within the
                framework of Smatched. Any use beyond this is not permitted
                without the prior consent of Smatched or the respective rights
                holders.
                <br />
                <br />
                2. b) The use of „bot-controlled“ software, elements, apps etc.
                in any form is prohibited. Only the use by a natural person via
                a smartphone or tablet is allowed.
                <br />
                <br />
                3. c) Each user may use Smatched only on one terminal device.
                The systematic use on several devices is prohibited.
                <br />
                <br />
                4. d) The use of Smatched is only allowed in the home country of
                the user. The use of services such as fake GPS, VPN or similar
                are prohibited while using Smatched.
                <br />
                <br />
                5. e) Smatched users are only allowed to create, own and operate
                one Smatched account.
              </div>

              <h2>9. Rights of use</h2>

              <div className={styles.leftSub}>
                In addition, you will be redirected to third parties who are
                responsible for data processing when you click on or download
                third-party content. This content is marked as third-party
                content. It may be external links in messages, apps from third
                parties, tasks from third parties, etc..
                <br />
                <br />
                You are leaving our app.
              </div>

              <h2>10. Blocking from participation</h2>

              <div className={styles.leftSub}>
                1. a) In case of abuse (e.g. manipulation of scores (In-App
                currency “Smatched Coins”), in case of knowingly providing
                missinformation or in case of any other not only insignificant
                violation of these terms and conditions or the rules of the
                game, Smatched expressly reserves the right to exclude the
                respective participants completely or partially from the use
                and/or to block their user accounts. The right of blocking also
                exists in case of corresponding objective suspicions, for the
                duration of the period of time necessary for a reasonable
                examination of the facts. Further claims and rights remain
                unaffected in each case.
                <br />
                <br />
                2. b) Smatched expressly reserves the right to exclude the
                respective participants completely or partially from the use
                and/or to block their user accounts if the participant violates
                the terms and conditions of one or multiple points under 9.{' '}
                <b>rights of use</b>.
              </div>

              <h2>
                11. Termination of participation, redemption of remaining
                credits
              </h2>

              <div className={styles.leftSub}>
                The participant is entitled to terminate his participation in
                Smatched at any time and without giving reasons. A termination
                by Smatched is possible at any time and without giving reasons
                with a reasonable period of notice, which allows the Participant
                to redeem any remaining Coins credits. The termination can be
                declared in each case by written declaration or declaration in
                text form (e.g. by e-mail).
                <br />
                <br />
                In the event of termination, the participant’s user account will
                be deactivated. Any remaining credits can only be redeemed until
                the time of termination. The participant is advised to check
                their points balance accordingly and redeem any remaining
                credits before termination.
                <br />
                <br />
                The right to extraordinary termination without notice for good
                cause remains unaffected on both sides.
              </div>

              <h2>12. Amendment of these Conditions</h2>

              <div className={styles.leftSub}>
                The participant will be notified in advance of any changes to
                these terms and conditions of use and participation in writing
                or in text form (e.g. by e-mail). If the participant does not
                object to these changes within four weeks of receipt of the
                notification, the changes are deemed to have been approved by
                the participant. The participant will be informed of the right
                to object and the consequences of silence in the notification of
                change. In the event of an objection by the participant to the
                notified changes, the participant shall have the right to
                terminate participation in due time.
              </div>
              <h2>13. Final Provisions</h2>

              <div className={styles.leftSub}>
                The law of the Federal Republic of Germany shall apply, unless
                mandatory international consumer protection law is opposed.
                <br />
                <br />
                The place of jurisdiction is Heidelberg.
                <br />
                <br />
                Should any of these provisions be or become invalid, this shall
                not affect the validity of the remaining provisions.
                <br />
                <br />
                Rissland Marketing UG (limited liability)
                <br />
                <br />
                Kurfürsten-Anlage 52, 69115 Heidelberg, Germany
                <br />
                <br />
                Email: hello@smatched.de
                <br />
                <br />
                Status: 09.11.2022
                <br />
                <br />
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
                    src="/images/logo/smatchedlogo.png"
                    alt="The smatched logo"
                  />
                </div>
              </div>
              <div className={styles.rightMainMobile}>
                <h1 className={styles.textMobile}>Imprint</h1>
                <h2 className={styles.text2Mobile}>Smatched</h2>
                <div className={styles.paragMobile}>
                  <div className={styles.innerParagMobile}>
                    A brand of Rissland Marketing UG (limited liability) <br />
                    Seat of the company: Kurfürsten Anlage 52, 69115 Heidelberg
                    <br />
                    Germany
                    <br />
                    <br />
                    Mannheim Local Court: HRB 728803
                    <br />
                    Managing Director: Alexander Rißland
                    <br />
                    Umsatzsteuer ID-Nr.: DE283249761523
                    <br />
                    Email: hello@smatched.de
                    <br />
                    Tel: +49 1525 780 5326
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToC;
