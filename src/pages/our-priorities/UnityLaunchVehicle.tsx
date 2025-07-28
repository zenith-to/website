import { PageLayout } from "../../components/PageLayout";
import { SEO } from "../../components/Seo";
import { PageContentLayout } from "../../components/sublayouts/PageContentLayout";
import { PageBaseContainer, PageDescription, PageText, PageTitle } from "../../styles/global";

function UnityLaunchVehicle() {
    return (
        <>
            <SEO title="About Zenith | Unity" description="In this page you can read more about Unity, the first European reusable launch vehicle." />
            <PageLayout children={
                <PageContentLayout
                    children={
                        <PageBaseContainer>
                            <PageTitle>Unity</PageTitle>
                            <PageDescription>
                                The first European reusable launch vehicle.
                            </PageDescription>
                            <PageText>
                                We're building Unity, the first European reusable launch vehicle.
                            </PageText>
                        </PageBaseContainer>
                    }  
                />
            } />
        </>
    );
};

export default UnityLaunchVehicle;