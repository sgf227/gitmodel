import { useEffect, useLayoutEffect } from 'react';
import { LifeHook } from '../common/type';

/** 模拟生命周期渲染前钩子 ngOnInit */
export const useBeforeRender: LifeHook = (fn) => {
    useLayoutEffect(() => {
        fn();
    }, []);
};

/** 模拟生命周期渲染后钩子 ngAfterViewInit */
export const useAfterRender: LifeHook = (fn) => {
    useEffect(() => {
        fn();
    }, []);
};

/** 模拟生命周期渲染后钩子 ngAfterViewInit */
export const useBeforeDestroy: LifeHook = (fn) => {
    useEffect(() => {
        return () => {
            fn();
        };
    }, []);
};
