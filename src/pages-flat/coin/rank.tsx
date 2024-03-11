'use client';

import WidgetCoinRank from '@widgets/coin/rank';
import React, { Fragment } from 'react'

export default function CoinRank() {
    return (
        <Fragment>
            <h1>Coins</h1>
            <WidgetCoinRank></WidgetCoinRank>
        </Fragment>
    )
}
