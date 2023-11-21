 # BoldBI Embedded Angular with Node.js Sample

This project was created using Angular 16 with Node.js. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

 ## Dashboard view

![Dashboard View](https://github.com/boldbi/angular-with-nodejs-sample/assets/129487075/0ae43cea-33eb-49df-938f-b3a4c101abb9)


 ## Requirements/Prerequisites

 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

> **NOTE:** Node.js versions 16.14 to 18.18 are supported.

 #### Supported browsers
  
  * Google Chrome, Microsoft Edge, and Mozilla Firefox.

 ## Configuration

 * Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

   ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

 * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

 * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-nodejs-sample/tree/master) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](https://github.com/boldbi/angular-with-nodejs-sample/assets/129487075/bcefae3e-0b86-4d01-81da-dd2d622a800e)

 ## Run a Sample Using Command Line Interface 
    
  * Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/angular-with-nodejs-sample) where the project is located.
   
  * To install all dependent packages, use the following command `npm install`.
 
  * Finally, run the application using the following command `npm start`.  After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:4200/). Copy this URL and paste it into your default web browser.

 ## Developer IDE

  * [Visual Studio Code](https://code.visualstudio.com/download)

 ### Run a Sample Using Visual Studio Code

  * Open the Angular with Node.js sample in **Visual Studio Code**.
   
  * Open the terminal in Visual Studio Code and install all dependent packages by executing the following command in the terminal.

    ```bash
      npm install
    ```
    
  * Finally, run the application using the following command.
    
    ```bash
      npm start
    ```

  * After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:4200/). Copy this URL and paste it into your default web browser. 

      ![dashboard view](https://github.com/boldbi/angular-with-nodejs-sample/assets/129487075/e2d60aab-0be4-49c0-8f12-7738b7fbf2af)

>**NOTE:** If the API host is already in use, modify the port number per your preference in embed.js and update that in app.component.ts file.

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/angular-with-node-js/#how-to-run-the-sample) to know how to run the sample.

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best to consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).