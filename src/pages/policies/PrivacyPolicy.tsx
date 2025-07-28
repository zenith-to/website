import { PageLayout } from "../../components/PageLayout";
import { SEO } from "../../components/Seo";
import { PageContentLayout } from "../../components/sublayouts/PageContentLayout";
import { PageBaseContainer, PageDescription, PageText, PageTitle } from "../../styles/global";

function PrivacyPolicy() {
    return (
        <>
            <SEO title="About Zenith | Privacy policy" description="In this page you can read the privacy policy for Zenith." />
            <PageLayout children={
                <PageContentLayout
                    children={
                        <PageBaseContainer>
                            <PageTitle>Privacy policy</PageTitle>
                            <PageDescription>
                                Read more about how your privacy is important for us.
                            </PageDescription>
                            <PageText>
                                This website uses Google Analytics to track and analyze visitor data. This tool helps us understand user interactions, measure performance, and enhance the user experience. Google Analytics collects anonymous information, such as page visits and time spent on the site. You can opt out by adjusting your browser's cookie settings or using Google's opt-out tools.
                            </PageText>
                        </PageBaseContainer>
                    }  
                />
            } />
        </>
    );
};

export default PrivacyPolicy;
