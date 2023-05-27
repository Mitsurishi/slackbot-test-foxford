export interface IProfileResponse {
    ok: boolean
    profile: Profile
}

export interface Profile {
    title: string
    phone: string
    skype: string
    real_name: string
    real_name_normalized: string
    display_name: string
    display_name_normalized: string
    fields: Fields
    status_text: string
    status_emoji: string
    status_emoji_display_info: any[]
    status_expiration: number
    avatar_hash: string
    start_date: string
    email: string
    pronouns: string
    huddle_state: string
    huddle_state_expiration_ts: number
    first_name: string
    last_name: string
    image_24: string
    image_32: string
    image_48: string
    image_72: string
    image_192: string
    image_512: string
}

export interface Fields {
    [propName: string]: Field
}

export interface Field {
    value: string
    alt: string
}