import { MailIcon } from "@heroicons/react/outline"
const Footer = () => {
    return (
        <div className="flex flex-col bg-neutral-950 text-gray-50">
            <footer className="w-full h-[400px] border-solid border-0 border-t-[0.05px] border-neutral-700 bg-neutral-900 mt-auto text-gray-50">
                <div className="flex justify-center w-full mt-10 gap-20">
                    <section>
                        <h1><b>Visualizer</b></h1>
                        <ul className="text-sm text-gray-10 cursor-pointer">
                            <li className="mt-3">Today</li>
                            <li className="mt-3">Tags</li>
                            <li className="mt-3">Trends</li>
                        </ul>
                    </section>
                    <section>
                        <h1><b>Resources</b></h1>
                        <ul className="text-sm text-gray-10 cursor-pointer">
                            <li className="mt-3">Documentation</li>
                            <li className="mt-3">Integrations</li>
                            <li className="mt-3">Service Status</li>
                        </ul>
                    </section>
                    <section>
                        <h1><b>Company</b></h1>
                        <ul className="text-sm text-gray-10 cursor-pointer">
                            <li className="mt-3">Blog</li>
                            <li className="mt-3">Pricing</li>
                            <li className="mt-3">About Us</li>
                            <li className="mt-3">Careers</li>
                        </ul>
                    </section>
                    <section>
                        <h1><b>Policies</b></h1>
                        <ul className="text-sm text-gray-10 cursor-pointer">
                            <li className="mt-3">VPAT</li>
                            <li className="mt-3">SLA</li>
                            <li className="mt-3">Privacy</li>
                            <li className="mt-3">Terms</li>
                            <li className="mt-3">Cookie</li>
                            <li className="mt-3">Patent</li>
                        </ul>
                    </section>
                </div>
                <div className="flex justify-center w-full">
                   <div className="md:hidden text-gray-50">
                    <MailIcon className="w-5"/>
                   </div>
                    <div>
                    <p className="text-xs">Copyright © 2023 Satellite</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer