import React, { useEffect, useState } from 'react';
import Topbar from '../../blocks/Topbar/Topbar';
import Drawer from "@jahlgren/react-drawer";
import Menu from '../../components/Menu/Menu';
import { useRouter } from 'next/router';

const DefaultPageLayout = ({children}: any) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {pathname} = useRouter();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <div>
        <Topbar onDrawerButtonClick={() => setIsDrawerOpen(true)} />
        <main>
            {children}
        </main>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Menu vertical />
        </Drawer>
    </div>
  );
};

const getDefaultPageLayout = (page: any) => <DefaultPageLayout>{page}</DefaultPageLayout>

export default getDefaultPageLayout;