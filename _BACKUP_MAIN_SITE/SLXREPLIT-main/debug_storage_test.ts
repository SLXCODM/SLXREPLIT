import { storage } from "./server/storage";

async function run() {
    try {
        console.log("Fetching projects...");
        const projects = await storage.getProjects();
        console.log("Projects found:", projects.length);
        projects.forEach(p => console.log(`- ${p.title} (${p.category})`));
    } catch (error) {
        console.error("Fatal Error fetching projects:", error);
    }
}

run();
