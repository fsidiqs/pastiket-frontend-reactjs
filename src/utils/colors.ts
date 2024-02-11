export const colors = {
    purple: '#68408D',
    lightPurple: '#782FBB',
    gray: '#8C8C8C',
    darkGray: '#868686',
    softGray: '#C7C7C7',
    white: '#FFFFFF',
    black: '#000000',
    red: '#F05076',
    green: '#18675f',
    orange: '#F6BA44',
    yellow: '#F6BA44',
    bone: '#F3F3F3',
    blue: '#3d91ff',
    lightGray: '#E4E4E4',
    softBlack: '#4B4B4B',
    get primary() {
        return this.green;
    },
};

export type ColorPalleteTypes = keyof typeof colors;
