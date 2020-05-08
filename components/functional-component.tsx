import React, { useState, useCallback, useEffect } from "react";
// import { View } from "react-native";

// Passed by parent component
type PublicProps = {};

// Injected by hocs or other means of prop injection
interface Props extends PublicProps {
}

const Component: React.FC<Props> = ({
  ...props
}) => {
  /**
   * states
   */
  /**
   * callbacks
   */
  const handle = useCallback(() => {});
  /**
   * effects
   */
  useEffect(() => {
    // did mount
  }, []);

  return null
};

Component.displayName = {
  title: "Login",
};

export default Component as React.FC<PublicProps>;
