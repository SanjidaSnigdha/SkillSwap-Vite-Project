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
            <main className='w-11/12 mx-auto my-3 *:'>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main'>
                    <Outlet>

                    </Outlet>
                    </section>

                    <aside>
                        <RightAside></RightAside>
                    </aside>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;