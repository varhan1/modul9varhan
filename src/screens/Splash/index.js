import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { IconLogo } from '../../assets'
import { getData } from '../../utils/localStorage'

export default class Splash extends Component {
    componentDidMount() {
        // Setelah komponen didmount dijalankan ada timeout selama 3000 milidetik atau 3 detik
        setTimeout(async() => {
            // Ambil data pengguna dari penyimpanan lokal menggunakan fungsi getData dari utils/localStorage
            const userData = await getData("user");
            // Periksa apakah data pengguna ada
            if (userData) {
                // Jika ada, navigasikan ke halaman 'MainApp'
                this.props.navigation.replace('MainApp');
            } else {
                // Jika tidak ada, navigasikan ke halaman 'Login'
                this.props.navigation.navigate('Login');
            }
        }, 3000)
    }

    render() {
        return (
            // Tampilkan tata letak Splash dengan menggunakan komponen View dan IconLogo
            <View style={styles.pages}>
                <IconLogo />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
