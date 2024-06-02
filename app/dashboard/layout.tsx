'use client';

// import '../globals.css';
import './data-tables-css.css';
import './satoshi.css';
import Loader from '@/components/common/loader';
import { redirect, usePathname } from 'next/navigation';

import Sidebar from '@/components/layouts/sidebar';
import Header from '@/components/layouts/header';
import { useEffect, useState } from 'react';

type PropTypes = {
    children: React.ReactNode;
};

const DashboardLayouts = ({ children }: PropTypes) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [sudahLogin, setSudahLogin] = useState<string | null>(null);

    const pathName = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof localStorage !== "undefined") {
            const loginStatus = localStorage.getItem('sudahMasuk');
            setSudahLogin(loginStatus);
        }
        setTimeout(() => setLoading(false), 1000);
    }, []);

    useEffect(() => {
        if (sudahLogin === 'false') {
            redirect('/');
        }
    }, [sudahLogin]);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark overflow-hidden">
            {loading ? (
                <Loader />
            ) : (
                <div className="flex h-screen overflow-hidden">
                    {/* <!-- ===== Sidebar Start ===== --> */}
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Sidebar End ===== --> */}

                    {/* <!-- ===== Content Area Start ===== --> */}
                    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                        {/* <!-- ===== Header Start ===== --> */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/* <!-- ===== Header End ===== --> */}

                        {/* <!-- ===== Main Content Start ===== --> */}
                        <main>
                            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
                        </main>
                        {/* <!-- ===== Main Content End ===== --> */}
                    </div>
                    {/* <!-- ===== Content Area End ===== --> */}
                </div>
            )}
        </div>
    );
};

export default DashboardLayouts;
