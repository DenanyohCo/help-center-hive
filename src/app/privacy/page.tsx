import NewsletterCTA from "@/components/NewsletterCTA";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const Privacy = () => {
    return (
        <section className="container py-12 my-4">
            <div className="container bg-[#FFFFFF]">
                <div className="text-6xl py-4 font-bold">Privacy Policy</div>
                <div className="text-lg">Last updated December 2023</div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    What information do we collect?
                    <p className="text-lg font-normal pt-4">
                        At Help Center Design, accessible from <Link href='https://www.helpcenter.design'>
                            www.helpcenter.design </Link> , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Help Center Design and how we use it.
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Log Files
                    <p className="text-lg font-normal pt-4">
                        Help Center Design follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator.
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Cookies and Web Beacons
                    <p className="text-lg font-normal pt-4">
                        Like any other website, Help Center Design uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                        For more general information on cookies, please read the "Cookies" article from the Privacy Policy Generator.
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Google DoubleClick DART Cookie
                    <p className="text-lg font-normal pt-4">
                        Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Our Advertising Partners
                    <p className="text-lg font-normal pt-4">
                        Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.

                        Google

                        https://policies.google.com/technologies/ads
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Privacy Policies
                    <p className="text-lg font-normal pt-4">
                        You may consult this list to find the Privacy Policy for each of the advertising partners of Help Center Design.

                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Help Center Design, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

                        Note that Help Center Design has no access to or control over these cookies that are used by third-party advertisers.
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Third Party Privacy Policies

                    <p className="text-lg font-normal pt-4">
                        Help Center Design's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Children's Information
                    <p className="text-lg font-normal pt-4">
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

                        Help Center Design does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Online Privacy Policy Only
                    <p className="text-lg font-normal pt-4">
                        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Help Center Design. This policy is not applicable to any information collected offline or via channels other than this website.
                    </p>
                </div>
                <div className="text-4xl font-bold pt-12 mt-4">
                    Consent
                    <p className="text-lg font-normal pt-4">
                        By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;