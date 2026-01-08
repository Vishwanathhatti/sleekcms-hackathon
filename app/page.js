import { sleekClient } from "@/lib/sleekcms";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PrizeSection from "./components/PrizeSection";
import TeamFormationSection from "./components/TeamFormationSection";
import JourneySection from "./components/JourneySection";
import FAQSection from "./components/FAQSection";
import SponsorsSection from "./components/SponsorsSection";
import FooterSection from "./components/FooterSection";

export default async function Home() {
    // Fetching data from SleekCMS
    // Assuming the entry slug is 'home' or 'navonmesh' or similar. 
    // Using 'navonmesh' to match the branding/project name.
    // If this fails, the slug might need to be adjusted.
    let data;
    try {
        const client = await sleekClient;
        data = await client.getContent();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        // Fallback or error UI could handle this
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
                    <p className="text-gray-400">Could not load content. Please check the CMS configuration.</p>
                    <pre className="mt-4 text-xs text-red-500 bg-red-900/10 p-4 rounded text-left overflow-auto max-w-lg mx-auto">
                        {error.message}
                    </pre>
                </div>
            </div>
        );
    }

    // extract the actual content entries
    const content = data?.entries || {};

    return (
        <main className="bg-[#0A0A0A] min-h-screen text-white/90 font-sans selection:bg-blue-500/30">
            <Navbar data={content.navbar} />

            <div className="flex flex-col">
                <HeroSection data={content.hero} />
                <PrizeSection data={content.prizes} />
                <TeamFormationSection data={content.teamformation} />
                <JourneySection data={content.journey} />
                <FAQSection data={content.faqs} />
                <SponsorsSection data={content.sponsers} />
            </div>

            <FooterSection data={content.footer} />
        </main>
    );
}
