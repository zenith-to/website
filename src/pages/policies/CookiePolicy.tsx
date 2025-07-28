import { PageLayout } from "../../components/PageLayout";
import { SEO } from "../../components/Seo";
import { PageContentLayout } from "../../components/sublayouts/PageContentLayout";
import { PageBaseContainer, PageDescription, PageText, PageTitle } from "../../styles/global";

function CookiePolicy() {
    return (
        <>
            <SEO title="About Zenith | Cookies" description="In this page you can read the cookie policy for Zenith." />
            <PageLayout children={
                <PageContentLayout
                    children={
                        <PageBaseContainer>
                            <PageTitle>How cookies are used on Zenith</PageTitle>
                            <PageDescription>
                                Read how cookies are used on Zenith.
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

export default CookiePolicy;
