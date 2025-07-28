import { PageLayout } from "../../components/PageLayout";
import { SEO } from "../../components/Seo";
import { PageContentLayout } from "../../components/sublayouts/PageContentLayout";
import { PageBaseContainer, PageDescription, PageText, PageTitle } from "../../styles/global";

function OurMission() {
    return (
        <>
            <SEO title="About Zenith | Our mission" description="Connecting the world with Zenith." />
            <PageLayout children={
                <PageContentLayout
                    children={
                        <PageBaseContainer>
                            <PageTitle>Our mission</PageTitle>
                            <PageDescription>
                                A reliable access to space for the European Union.
                            </PageDescription>
                            <PageText>
                                Zenith is developing Europe's first reusable launch vehicle to secure independent and strategic access to space.
                            </PageText>
                        </PageBaseContainer>
                    }  
                />
            } />
        </>
    );
};

export default OurMission;