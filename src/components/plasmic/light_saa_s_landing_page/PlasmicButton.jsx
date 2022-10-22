// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6f2tCFSxu7LWocYppemXKJ
// Component: 2I7YqT3nVeJxiy
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: 6f2tCFSxu7LWocYppemXKJ/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 2I7YqT3nVeJxiy/css
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: Bp4Bp6bDZlk0XW/icon

export const PlasmicButton__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "outline",
  "bgDifference",
  "round",
  "large",
  "flat",
  "extraSmallShadow",
  "isDisabled",
  "small"
);

export const PlasmicButton__ArgProps = new Array(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbgDifference]: hasVariant(
            variants,
            "bgDifference",
            "bgDifference"
          ),

          [sty.rootcolor_blueBorder]: hasVariant(
            variants,
            "color",
            "blueBorder"
          ),

          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
          [sty.rootcolor_darkGray]: hasVariant(variants, "color", "darkGray"),
          [sty.rootcolor_footerButton]: hasVariant(
            variants,
            "color",
            "footerButton"
          ),

          [sty.rootcolor_green]: hasVariant(variants, "color", "green"),
          [sty.rootcolor_indigo]: hasVariant(variants, "color", "indigo"),
          [sty.rootcolor_navLinkBlue]: hasVariant(
            variants,
            "color",
            "navLinkBlue"
          ),

          [sty.rootcolor_navLink]: hasVariant(variants, "color", "navLink"),
          [sty.rootcolor_red]: hasVariant(variants, "color", "red"),
          [sty.rootcolor_smaillWhite]: hasVariant(
            variants,
            "color",
            "smaillWhite"
          ),

          [sty.rootcolor_white]: hasVariant(variants, "color", "white"),
          [sty.rootextraSmallShadow]: hasVariant(
            variants,
            "extraSmallShadow",
            "extraSmallShadow"
          ),

          [sty.rootflat]: hasVariant(variants, "flat", "flat"),
          [sty.rooticonOnly]: hasVariant(variants, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootlarge]: hasVariant(variants, "large", "large"),
          [sty.rootoutline]: hasVariant(variants, "outline", "outline"),
          [sty.rootround]: hasVariant(variants, "round", "round"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),

          [sty.rootsmall]: hasVariant(variants, "small", "small")
        }
      )}
    >
      {(
        hasVariant(variants, "color", "blue")
          ? false
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg___4FPyc)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),

              [sty.slotTargetStartIconcolor_green]: hasVariant(
                variants,
                "color",
                "green"
              ),

              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),

              [sty.slotTargetStartIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),

              [sty.slotTargetStartIconcolor_red]: hasVariant(
                variants,
                "color",
                "red"
              ),

              [sty.slotTargetStartIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetStartIconiconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetStartIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetStartIconshowEndIcon_color_green]:
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetStartIconshowEndIcon_showStartIcon_color_green]:
                hasVariant(variants, "showStartIcon", "showStartIcon") &&
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(hasVariant(variants, "iconOnly", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenbgDifference]: hasVariant(
                variants,
                "bgDifference",
                "bgDifference"
              ),

              [sty.slotTargetChildrencolor_blueBorder]: hasVariant(
                variants,
                "color",
                "blueBorder"
              ),

              [sty.slotTargetChildrencolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetChildrencolor_clear]: hasVariant(
                variants,
                "color",
                "clear"
              ),

              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),

              [sty.slotTargetChildrencolor_footerButton]: hasVariant(
                variants,
                "color",
                "footerButton"
              ),

              [sty.slotTargetChildrencolor_green]: hasVariant(
                variants,
                "color",
                "green"
              ),

              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),

              [sty.slotTargetChildrencolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetChildrencolor_navLinkBlue]: hasVariant(
                variants,
                "color",
                "navLinkBlue"
              ),

              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),

              [sty.slotTargetChildrencolor_red]: hasVariant(
                variants,
                "color",
                "red"
              ),

              [sty.slotTargetChildrencolor_smaillWhite]: hasVariant(
                variants,
                "color",
                "smaillWhite"
              ),

              [sty.slotTargetChildrencolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetChildreniconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetChildrenisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetChildrenlarge]: hasVariant(
                variants,
                "large",
                "large"
              ),

              [sty.slotTargetChildrenoutline]: hasVariant(
                variants,
                "outline",
                "outline"
              ),

              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              ),

              [sty.slotTargetChildrensmall]: hasVariant(
                variants,
                "small",
                "small"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? false
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <ChevronRightIcon
                className={classNames(projectcss.all, sty.svg___3Hysp)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),

              [sty.slotTargetEndIconcolor_green]: hasVariant(
                variants,
                "color",
                "green"
              ),

              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),

              [sty.slotTargetEndIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),

              [sty.slotTargetEndIconcolor_red]: hasVariant(
                variants,
                "color",
                "red"
              ),

              [sty.slotTargetEndIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetEndIconiconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetEndIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton__ArgProps,
          internalVariantPropNames: PlasmicButton__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,
    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
