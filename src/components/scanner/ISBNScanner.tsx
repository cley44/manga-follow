import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { getInfoFromIsbn } from "../../utils/api";

export const ISBNScanner = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const [ISBN, setISBN] = useState<number>();
  const [manga, setManga] = useState<string>();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setISBN(data);
    getInfoFromIsbn(data).then((title) => {
      setManga(title);
    });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.baseView}>
      <View style={styles.wrapper}>
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.codabar.ean13]}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <View style={styles.tapToScan}>
        {scanned ? (
          <>
            <Text>ISBN detected: {"\n" + ISBN}</Text>
            <Text>Manga detected: {"\n" + manga}</Text>
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          </>
        ) : (
          <View style={styles.scan}>
            <Text style={styles.scanText}>Scan a manga</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "65%",
  },
  baseView: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
  },
  tapToScan: {
    height: "20%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  barcodeTextURL: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  scan: {
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 30,
  },
  scanText: {
    color: "white",
  },
});
