import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet>

                    </Outlet>
                    </section>

                    <aside className='col-span-3'>
                        <RightAside></RightAside>
                    </aside>
            </main>
        </div>
    );
};

export default HomeLayout;