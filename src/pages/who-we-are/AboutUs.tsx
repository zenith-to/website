import { PageLayout } from "../../components/PageLayout";
import { SEO } from "../../components/Seo";
import { PageContentLayout } from "../../components/sublayouts/PageContentLayout";
import { PageBaseContainer, PageDescription, PageText, PageTitle } from "../../styles/global";

function AboutUs() {
    return (
        <>
            <SEO title="About Zenith | The company" description="In this page you can find out more about the company." />
            <PageLayout children={
                <PageContentLayout
                    children={
                        <PageBaseContainer>
                            <PageTitle>About the company</PageTitle>
                            <PageDescription>
                                Discover more about the company and what we're building.
                            </PageDescription>
                            <PageText>
                                At Zenith, we're building Europe's first reusable launch vehicle to establish and maintain a sovereign and strategic European access to space.
                            </PageText>
                        </PageBaseContainer>
                    }  
                />
            } />
        </>
    );
};

export default AboutUs;