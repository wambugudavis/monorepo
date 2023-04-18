import type { Meta, StoryObj } from '@storybook/react';

import {TopNavigation} from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof TopNavigation> = {
    title: 'Top Navigation',
    component: TopNavigation,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="relative">
                {Story()}
            </div>
        ),
    ],
    argTypes: {
        header: {
            control: 'color',
        },
    },
};

export default meta;
type Story = StoryObj<typeof TopNavigation>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
    args: {
        header: 'Dashboard'
    },
};
