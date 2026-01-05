import "../index.css"
import "bootstrap-icons/font/bootstrap-icons.css";

function Docs() {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-4 col-lg-4 mt-5 d-flex justify-content-end" >
                        <div className="listPackage">
                            <ul className="list-unstyled text-start">
                                <li className="active">Package Version</li>
                                <li>Package Structure</li>
                                <li>Quick Start</li>
                                <li>Project Configuration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8 mt-5">
                        <h4 className="text-start">
                            Pacakge Versions
                        </h4>
                        <div className="d-flex mainCard card shadow-sm p-2">

                            <div className="container">
                                <div className="row">
                                    <div className="col-sm  d-flex center-content">
                                        <div>
                                            <img src="https://themewagon.github.io/sustainable-nextjs/_next/static/media/Categories=Nextjs.b5b9efc7.svg" />
                                            <h5>
                                                v15.1.1
                                            </h5>
                                            <p className="text-muted">
                                                NextJs
                                            </p>
                                        </div>
                                        <div>
                                            <div className="vertical-line ms-5">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm d-flex center-content">
                                        <div>
                                            <img src="https://themewagon.github.io/sustainable-nextjs/_next/static/media/Categories=React.0f86ad2b.svg" />
                                            <h5>
                                                v19.0.0
                                            </h5>
                                            <p className="text-muted">
                                                React
                                            </p>
                                        </div>
                                        <div>
                                            <div className="vertical-line  ms-3">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm d-flex center-content">
                                        <div>
                                            <img src="https://themewagon.github.io/sustainable-nextjs/_next/static/media/Categories=Tailwind.b34ebfd8.svg" />
                                            <h5>
                                                v4+
                                            </h5>
                                            <p className="text-muted">
                                                Tailwindcss
                                            </p>
                                        </div>
                                        <div>
                                            <div className="vertical-line  ms-3">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm d-flex center-content">
                                        <div>
                                            <img src="https://themewagon.github.io/sustainable-nextjs/_next/static/media/nextauth.048131a8.png" style={{ width: "40px" }} />
                                            <h5>
                                                v4.24.11
                                            </h5>
                                            <p className="text-muted">
                                                NextAuth
                                            </p>
                                        </div>
                                        <div>
                                            <div className="vertical-line  ms-3">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm  d-flex center-content">
                                        <div>
                                        <img src="https://themewagon.github.io/sustainable-nextjs/_next/static/media/Categories=Typescript.113fc394.svg" />
                                        <h5>
                                            v5.6.3
                                        </h5>
                                         <p className="text-muted">
                                            Typescript
                                        </p>
                                        </div>
                                       
                                          <div>
                                            <div className="vertical-line  ms-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex mt-3">
                            <p className="text-start text-secondary d-flex">
                                Sustainable Tailwind NextJs Template is built with Tailwindcss and Nextjs.
                                These theme is ready to use and you can totally customize as per your requirement.
                                For Customize, You should have knowledge of NextJs, ReactJs, Tailwind and JSX to be able to modify these template.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-start">
                                Pacakge Versions
                            </h4>
                            <div className="d-flex card shadow-sm p-2">
                                <small className="text-secondary">
                                    Sustainable Tailwind Nextjs Templates
                                </small>
                            </div>
                        </div>


                        <div>
                            <h4 className="text-start mt-4">
                                Quick Start
                            </h4>
                            <div className="d-flex card shadow-sm p-2">


                                1. Requirements
                                <p className="text-secondary text-start">
                                    Before proceeding, you need to have the latest stable node.js
                                </p>

                                <p className="ms-0">Recommended environment:</p>
                                <ul>
                                    <li>node js 20+</li>
                                    <li>npm js 10+</li>
                                </ul>

                            </div>

                            <div className="d-flex card shadow-sm p-2 mt-4">

                                2. Install
                                <p className="text-secondary text-start">
                                    Open package folder and install its dependencies. We recommanded yarn or npm.
                                </p>

                                1) Install with npm: <br />
                                <kbd className="w-100 mt-2">
                                    cd project-folder<br />

                                    npm install
                                </kbd>
                                <br />
                                1) Install with yarn: <br />
                                <kbd className="w-100 mt-2">
                                    cd project-folder<br />

                                    yarn install
                                </kbd>
                            </div>
                            <div className="d-flex card shadow-sm p-2 mt-4">

                                3. Start
                                <p className="text-secondary text-start">
                                    Once npm install is done now you an run the app.
                                </p>

                                <kbd className="w-100 mt-2">
                                    npm run dev or yarn run dev
                                </kbd>
                                <p className="text-secondary text-start mt-4">
                                    This command will start a local webserver http://localhost:3000:
                                </p>

                                <kbd className="text-start mt-4">
                                    <i className="bi bi-chevron-right text-white"></i>
                                    sustainable_project@1.0.1 dev
                                    <br />
                                    <i className="bi bi-chevron-right text-white"></i>
                                    next dev
                                    <br />
                                    <br />
                                    <i className="bi bi-dash"></i>
                                    Next.js 15.1.1
                                    <br />
                                    <i className="bi bi-dash"></i>
                                    Local: http://localhost:3000
                                </kbd>
                                <br />
                            </div>

                            <div className="d-flex card shadow-sm p-2 mt-4">
                                4. Build / Deployment
                                <p className="text-secondary text-start">
                                    After adding url run below command for build a app.
                                </p>
                                <kbd className="text-start mt-2">
                                    npm run build or yarn build
                                </kbd>
                                <p className="text-secondary text-start mt-3">
                                    Finally, Your webiste is ready to be deployed.🥳
                                </p>
                                <br />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-start mt-4">
                                Project Configuration
                            </h4>
                            <h5 className="text-start mt-3">
                                Colors
                            </h5>
                            <div className="d-flex card shadow-sm p-2 mt-4">

                                1. Override Colors
                                <p className="text-secondary text-start">
                                    For any change in colors : src/utils/globals.css
                                </p>

                                <kbd className="w-100 mt-2">
                                    --color-primary: #1358d8;
                                    <br />
                                    --color-darkprimary: #054ac8;
                                    <br />
                                    --color-lightPrimary: #3187f4;
                                    <br />
                                    --color-secondary: #102c46;
                                    <br />
                                    --color-SlateBlue: #547593;
                                    <br />
                                    --color-AliceBlue: #f3f9fd;
                                    <br />
                                    --color-LightApricot: #f9c78f;
                                    <br />
                                    --color-border: #233d55;
                                    <br />
                                    --color-BorderLine: #ccd7e1;
                                    <br />
                                    --color-darkmode: #021526;
                                    <br />
                                    --color-darklight: #061b2e;
                                    <br />
                                    --color-darktext: #7f8487;
                                    <br />
                                    --color-dark_border: #224767;
                                    <br />
                                    --color-Cream: #eee8a9;
                                    <br />
                                    --color-LavenderBlue: #dbe7ff;
                                    <br />
                                    --color-LightSoftBlue: #dbe9f6;
                                    <br />
                                    --color-gray: #acbcca;
                                </kbd>
                                <br />

                            </div>

                            <div className="d-flex card shadow-sm p-2 mt-4">

                                2. Override Theme Colors
                                <p className="text-secondary text-start">
                                    For change , go to : src/utils/globals.css
                                </p>

                                <kbd className="w-100 mt-2">
                                    --color-primary: #1358d8;
                                    <br />
                                    --color-secondary: #102c46;
                                </kbd>
                                <br />
                            </div>
                        </div>

                        <div>
                            <h5 className="text-start mt-3">
                                Typography
                            </h5>
                            <div className="d-flex card shadow-sm p-2 mt-4">
                                <p className="text-secondary text-start">
                                    1. Change Font family over here : src/app/layout.tsx
                                </p>
                                <kbd className="w-100 mt-2">
                                    import {"DM_Sans"} from "next/font/google";
                                    <br />
                                    const dmsans = DM_Sans({'subsets:["latin"]'});
                                </kbd>
                            </div>
                            <h5 className="text-start mt-3">
                                Logo
                            </h5>
                            <div className="d-flex card shadow-sm p-2 mt-4">
                                <p className="text-secondary text-start">
                                    1. Change Logo over here :src/components/Layout/Header/Logo/index.tsx
                                </p>
                                <kbd className="w-100 mt-2">
                                    <pre className="mb-0">
                                        {`<Link href="/">          
<Image
 src="/images/logo/logo.svg"
 alt="logo"
 width=160
 height=50
 quality=100
 className='dark:hidden' 
 />
<Image
 src="/images/footer/footer-logo-white.svg"
 alt="logo"
 width=160
 height=50
 quality=100
 className='dark:block hidden'
 />                                           
</Link>`
                                        }
                                    </pre>
                                </kbd>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Docs;