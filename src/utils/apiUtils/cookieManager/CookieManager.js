//   /**
//    * Initialize cookies.
//    */
//   private static void initializeCookies() {
//     cookieManager = new CookieManager(null, CookiePolicy.ACCEPT_ALL);
//     CookieHandler.setDefault(cookieManager);
//   }

//   if (!sessionInitialized) {
//     initializeCookies();
//     sessionInitialized = true;
//   }
//   String contType = (Objects.isNull(contentType)) ? "application/json" : contentType;

//   connection.setInstanceFollowRedirects(true);
//   connection.setConnectTimeout(timeoutInSeconds * 1000);
//   connection.setReadTimeout(timeoutInSeconds * 1000);

//   connection = addHeaderRequestProperties(connection, getRequestProperties(server));

//   private static Map<String, String> getDefaultRequestProperties (Server server) {
//     String contType = (Objects.isNull(contentType)) ? "application/json" : contentType;

//     defaultRequestProperties = new HashMap<>();
//     defaultRequestProperties.put("iv-user", server.getUserName());
//     defaultRequestProperties.put("Content-Type", contType);
//     defaultRequestProperties.put("Accept", contType);
//     defaultRequestProperties.put("Accept-Charset", "UTF-8");
//     defaultRequestProperties.put("charset", "UTF-8");
//     defaultRequestProperties.put("Accept-Encoding", "*");

//     return defaultRequestProperties;
//   }
