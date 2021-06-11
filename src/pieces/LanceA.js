const React = require("react");
const piecePositionHoc = require("../piecePositionHoc");

function LanceA(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42.172" height="50">
      <path
        d="M7.89 4.577l-6.963 44.737 40.251 0.118 -6.728 -44.974 -13.102 -3.777z"
        fill="#FEEC99"
      />
      <path
        d="M0 49.883c0.323 -3.031 6.933 -45.78 7.105 -45.952 0.139 -0.139 3.327 -1.08 7.084 -2.092l6.832 -1.839 6.854 1.845c3.77 1.015 6.993 2.011 7.165 2.214 0.172 0.202 1.736 10.043 3.477 21.869 1.741 11.826 3.276 22.08 3.41 22.787l0.245 1.285 -21.092 0c-11.601 0 -21.087 -0.053 -21.08 -0.117zm40.166 -2.337c-0.01 -0.578 -1.43 -10.409 -3.155 -21.846l-3.136 -20.794 -6.427 -1.716 -6.427 -1.717 -6.412 1.714 -6.412 1.714 -3.143 20.796c-1.728 11.439 -3.155 21.27 -3.17 21.85l-0.027 1.05 19.164 0 19.164 0 -0.019 -1.05zm-19.787 -2.746c-0.161 -0.803 -0.292 -1.96 -0.292 -2.57 0 -1.433 -1.537 -1.477 -5.654 -0.162 -3.882 1.24 -6.075 0.778 -6.578 -1.387 -0.127 -0.545 0.553 -0.644 3.695 -0.542l3.85 0.126 -0.708 -2.004c-0.388 -1.101 -1.227 -2.934 -1.863 -4.072 -1.482 -2.652 -1.462 -3.069 0.13 -2.683 2.749 0.667 7.128 0.116 7.128 -0.897 0 -0.449 -0.496 -0.553 -1.803 -0.377 -1.92 0.257 -3.978 -0.516 -3.688 -1.387 0.109 -0.326 1.18 -0.478 2.833 -0.402 2.263 0.105 2.658 0.002 2.658 -0.692 0 -0.448 -0.331 -1.18 -0.736 -1.627 -0.674 -0.745 -0.655 -0.838 0.234 -1.12 1.683 -0.534 2.839 0.14 2.839 1.657 0 1.455 0.445 1.665 1.89 0.892 1.083 -0.58 2.784 0.31 2.784 1.457 0 0.623 -0.406 0.715 -2.337 0.53 -1.998 -0.193 -2.337 -0.107 -2.337 0.59 0 0.732 0.356 0.782 3.483 0.49l3.484 -0.327 0.706 1.69c0.655 1.567 0.64 1.8 -0.21 3.193 -0.504 0.826 -0.917 1.962 -0.918 2.523 -0.002 1.103 1.258 1.755 2.483 1.285 1.021 -0.392 3.44 2.007 2.734 2.713 -0.363 0.362 -1.474 0.278 -3.926 -0.3 -1.88 -0.443 -4.466 -0.74 -5.745 -0.658 -2.089 0.131 -2.338 0.265 -2.451 1.315 -0.47 4.363 -1.143 5.458 -1.685 2.746zm-1.753 -5.375c0.803 -0.161 1.46 -0.49 1.46 -0.733 0 -0.242 -0.42 -0.307 -0.934 -0.144 -1.253 0.398 -2.805 -0.137 -2.805 -0.966 0 -0.43 0.493 -0.67 1.375 -0.67 0.756 0 1.504 -0.21 1.663 -0.467 0.168 -0.271 -0.287 -0.468 -1.083 -0.468 -1.65 0 -2.864 -1.132 -1.695 -1.58 0.413 -0.16 1.248 -0.29 1.854 -0.29 0.607 0 1.233 -0.21 1.392 -0.467 0.334 -0.54 -0.232 -0.573 -2.73 -0.16l-1.796 0.297 0.35 2.152c0.192 1.183 0.362 2.52 0.376 2.97 0.03 0.893 0.378 0.965 2.573 0.526zm8.716 -1.695c0.143 -0.578 0.305 -1.998 0.359 -3.155 0.088 -1.893 -0.013 -2.119 -1.015 -2.26 -1.533 -0.217 -4.262 0.338 -4.262 0.867 0 0.24 0.63 0.309 1.4 0.155 1.49 -0.298 2.806 0.42 2.806 1.53 0 0.46 -0.663 0.643 -2.337 0.643 -1.314 0 -2.337 0.214 -2.337 0.489 0 0.305 0.615 0.373 1.641 0.18 1.741 -0.326 3.033 0.318 3.033 1.513 0 0.504 -0.387 0.592 -1.597 0.365 -0.879 -0.165 -1.983 -0.075 -2.454 0.199 -0.68 0.394 -0.302 0.5 1.822 0.512 2.395 0.012 2.707 -0.098 2.94 -1.038zm-3.516 -14.378c0 -0.284 -0.7 -0.363 -1.753 -0.197 -0.964 0.152 -2.331 0.055 -3.038 -0.216 -0.81 -0.311 -1.286 -0.325 -1.286 -0.038 0 0.251 -0.307 0.456 -0.683 0.456 -0.412 0 -0.884 -0.787 -1.19 -1.986 -0.915 -3.584 -1.47 -4.63 -2.283 -4.315 -1.548 0.6 -4.725 1.025 -4.725 0.632 0 -0.224 0.236 -0.407 0.524 -0.407 0.287 0 1.76 -0.752 3.272 -1.67 1.825 -1.109 2.748 -1.973 2.748 -2.57 0 -1.03 0.493 -1.157 1.31 -0.341 0.853 0.854 0.67 2.113 -0.415 2.874 -0.92 0.644 -0.927 0.699 -0.115 0.956 0.474 0.15 1.807 0.089 2.962 -0.138 1.156 -0.226 1.786 -0.44 1.4 -0.477 -0.386 -0.036 -1.08 -0.585 -1.541 -1.22 -0.818 -1.124 -0.816 -1.154 0.117 -1.154 0.699 0 0.957 -0.303 0.957 -1.124 0 -1.034 -0.144 -1.105 -1.803 -0.882 -1.803 0.242 -3.807 -0.433 -3.807 -1.282 0 -0.248 0.93 -0.451 2.066 -0.451 2.25 0 3.544 -0.349 3.544 -0.955 0 -0.214 -0.737 -0.269 -1.636 -0.123 -0.9 0.146 -1.636 0.167 -1.636 0.047 0 -0.12 0.845 -1.108 1.878 -2.194 1.402 -1.473 2.113 -1.9 2.804 -1.68 1.38 0.437 1.08 3.035 -0.35 3.035 -0.584 0 -0.603 0.126 -0.11 0.72 0.45 0.543 1.091 0.644 2.631 0.413 1.343 -0.201 2.273 -0.108 2.733 0.273 1.196 0.993 0.78 1.345 -1.757 1.491 -2.378 0.137 -2.455 0.185 -2.477 1.544 -0.013 0.771 -0.185 1.875 -0.382 2.454 -0.33 0.963 -0.217 1.051 1.339 1.051 2.73 0 3.506 0.662 3.506 2.985 0 2.832 -0.822 4.962 -1.915 4.962 -0.489 0 -0.89 -0.213 -0.89 -0.473zm0.686 -3.585c0.17 -0.906 0.2 -1.756 0.066 -1.89 -0.376 -0.376 -7.296 0.37 -7.296 0.787 0 0.203 0.12 0.974 0.268 1.713 0.267 1.343 0.271 1.344 3.46 1.19l3.193 -0.153 0.309 -1.647zm-6.178 0.476c-1.105 -0.446 -0.58 -0.917 1.662 -1.492 2.368 -0.607 3.83 -0.367 3.83 0.629 0 0.962 -3.776 1.556 -5.492 0.863zm8.44 -4.314c-2.147 -1.555 -4.158 -3.932 -3.51 -4.148 0.243 -0.08 1.446 0.387 2.675 1.04 1.228 0.653 2.484 1.188 2.792 1.188 0.925 0 2.152 1.675 1.834 2.503 -0.435 1.133 -1.688 0.94 -3.791 -0.583z"
        fill="#cfcfcf"
      />
      <path
        d="M0.25 48.715c0.131 -0.707 1.69 -11.036 3.464 -22.952 1.775 -11.917 3.292 -21.731 3.372 -21.81 0.08 -0.077 3.244 -0.979 7.03 -2.002l6.883 -1.86 6.884 1.834c3.786 1.01 6.977 1.928 7.09 2.042 0.115 0.114 1.641 9.834 3.393 21.601 1.752 11.767 3.308 22.077 3.458 22.913l0.274 1.519 -21.044 0 -21.043 0 0.239 -1.285zm39.207 -7.012c-0.572 -3.792 -2.04 -13.634 -3.264 -21.872l-2.224 -14.979 -6.59 -1.722 -6.591 -1.722 -6.31 1.743c-5.234 1.446 -6.335 1.903 -6.455 2.678 -0.08 0.514 -1.563 10.347 -3.297 21.852l-3.154 20.917 19.463 0 19.463 0 -1.04 -6.895zm-19.166 1.822c-0.37 -3.27 0.084 -3.162 -5.96 -1.413 -3.269 0.946 -4.466 0.871 -5.693 -0.356 -1.508 -1.507 -0.842 -1.805 4.09 -1.826 4.965 -0.022 7.359 -0.389 7.359 -1.129 0 -0.236 -0.773 -0.495 -1.717 -0.575 -2.292 -0.194 -2.679 -1.314 -0.453 -1.314 0.906 0 1.777 -0.21 1.936 -0.467 0.171 -0.277 -0.366 -0.468 -1.318 -0.468 -0.883 0 -1.863 -0.31 -2.177 -0.688 -0.483 -0.581 -0.273 -0.736 1.355 -0.996 1.06 -0.17 2.04 -0.49 2.178 -0.714 0.291 -0.472 -0.747 -0.51 -3.132 -0.116l-1.692 0.28 0.429 1.908c0.236 1.049 0.366 2.446 0.29 3.103 -0.114 0.976 -0.48 0.509 -1.985 -2.543 -2.137 -4.333 -2.221 -4.729 -0.96 -4.517 1.315 0.221 5.449 0.088 6.428 -0.207 0.45 -0.136 0.818 -0.558 0.818 -0.938 0 -0.539 -0.368 -0.621 -1.674 -0.376 -1.645 0.308 -3.936 -0.44 -3.936 -1.286 0 -0.213 1.263 -0.388 2.805 -0.388 2.986 0 3.375 -0.399 2.317 -2.375 -0.373 -0.697 -0.327 -0.973 0.197 -1.174 1.154 -0.442 2.628 0.669 2.628 1.981 0 1.128 0.105 1.185 1.671 0.89 1.043 -0.195 1.921 -0.105 2.337 0.24 1.18 0.98 0.717 1.373 -1.621 1.373 -1.58 0 -2.369 0.212 -2.55 0.686 -0.412 1.072 0.275 1.2 3.454 0.64 2.812 -0.496 2.993 -0.47 3.803 0.53 1.025 1.265 1.07 2.228 0.188 4.031 -0.364 0.747 -0.732 1.883 -0.818 2.526 -0.142 1.078 0.008 1.18 1.94 1.318 2.363 0.168 3.281 0.73 3.281 2.011 0 1.053 -0.403 1.072 -3.74 0.177 -1.413 -0.38 -3.858 -0.693 -5.432 -0.696l-2.862 -0.005 -0.227 2.364c-0.351 3.656 -1.17 3.924 -1.557 0.51zm7.13 -4.93c0.049 -0.038 0.154 -1.432 0.234 -3.096l0.144 -3.027 -1.36 -0.155c-1.86 -0.212 -4.483 0.325 -4.483 0.918 0 0.308 0.675 0.374 1.835 0.178 1.543 -0.261 1.914 -0.161 2.337 0.629 0.725 1.356 0.628 1.61 -0.502 1.314 -1.284 -0.335 -3.67 0.133 -3.67 0.721 0 0.263 0.745 0.324 1.79 0.148 1.336 -0.226 1.945 -0.115 2.403 0.437 0.833 1.004 0.37 1.335 -1.932 1.38 -1.07 0.022 -2.022 0.267 -2.116 0.546 -0.115 0.341 0.711 0.437 2.53 0.292 1.485 -0.118 2.74 -0.246 2.79 -0.284zm-3.393 -15.29c-0.188 -0.302 -0.974 -0.412 -1.89 -0.264 -0.863 0.14 -2.183 0.08 -2.932 -0.136 -0.891 -0.255 -1.547 -0.206 -1.896 0.144 -0.716 0.716 -1.259 -0.19 -1.642 -2.744 -0.445 -2.97 -1.079 -3.597 -3.057 -3.027 -3.321 0.957 -3.499 0.467 -0.469 -1.293 2.094 -1.215 3.083 -2.086 3.186 -2.804 0.168 -1.17 0.567 -1.307 1.393 -0.481 0.864 0.864 0.668 2.116 -0.455 2.902 -0.893 0.626 -0.922 0.747 -0.237 1.01 0.428 0.164 2.112 0.066 3.742 -0.217 6.033 -1.051 7.13 -0.466 6.712 3.578 -0.327 3.168 -1.54 4.814 -2.455 3.333zm0.531 -3.46c0.162 -0.863 0.179 -1.756 0.037 -1.985 -0.229 -0.37 -6.798 0.188 -7.253 0.617 -0.095 0.09 -0.044 0.856 0.115 1.703l0.288 1.541 3.26 -0.154 3.26 -0.155 0.293 -1.568zm-6.225 0.398c-0.322 -0.13 -0.585 -0.464 -0.585 -0.742 0 -0.279 0.13 -0.377 0.287 -0.22 0.158 0.158 1.088 -0.034 2.067 -0.425 1.432 -0.573 1.986 -0.602 2.836 -0.148 1.017 0.545 1.024 0.588 0.18 1.205 -0.847 0.62 -3.597 0.81 -4.785 0.33zm8.16 -4.596c-1.939 -1.48 -3.488 -3.363 -3.057 -3.714 0.086 -0.07 1.695 0.58 3.576 1.443 2.916 1.337 3.4 1.723 3.272 2.615 -0.228 1.597 -1.386 1.492 -3.79 -0.344zm-7.378 -0.995l-1.133 -1.227 1.052 0.324c0.931 0.286 1.052 0.16 1.052 -1.102 0 -1.407 -0.025 -1.421 -1.988 -1.152 -1.639 0.224 -2.144 0.1 -2.877 -0.71l-0.89 -0.983 2.878 0c2.342 0 2.877 -0.14 2.877 -0.758 0 -0.62 0.128 -0.652 0.696 -0.18 0.47 0.389 1.396 0.473 2.834 0.258 1.408 -0.211 2.366 -0.13 2.809 0.237 1.216 1.009 0.707 1.378 -1.899 1.378l-2.57 0 0 2.01c0 1.799 -0.603 3.131 -1.415 3.131 -0.16 0 -0.802 -0.551 -1.426 -1.226zm-1.92 -6.026c-0.16 -0.16 0.645 -1.153 1.789 -2.207 1.9 -1.753 2.142 -1.853 2.823 -1.173 1.344 1.345 0.198 2.537 -3.275 3.409 -0.575 0.144 -1.176 0.131 -1.336 -0.029z"
        fill="#b0b0b0"
      />
      <path
        d="M0.298 48.948c0.1 -0.578 1.652 -10.923 3.449 -22.988 1.796 -12.066 3.319 -21.99 3.383 -22.054 0.064 -0.064 3.216 -0.92 7.004 -1.901l6.887 -1.785 6.888 1.785c3.788 0.981 6.956 1.853 7.04 1.938 0.085 0.084 1.605 9.903 3.38 21.82 1.773 11.916 3.332 22.245 3.464 22.952l0.239 1.285 -20.958 0 -20.957 0 0.181 -1.052zm40.163 -1.168c-0.147 -0.707 -1.654 -10.646 -3.35 -22.086 -1.695 -11.44 -3.117 -20.83 -3.16 -20.868 -0.041 -0.037 -2.964 -0.831 -6.494 -1.765l-6.419 -1.698 -6.552 1.725c-3.774 0.993 -6.552 1.96 -6.552 2.28 0 0.676 -5.982 40.608 -6.354 42.412l-0.264 1.285 19.705 0 19.706 0 -0.266 -1.285zm-20.162 -4.568l-0.323 -2.582 -1.698 0.303c-0.933 0.167 -2.538 0.59 -3.567 0.94 -2.657 0.902 -5.075 0.82 -6.004 -0.206 -1.212 -1.34 -0.96 -1.526 1.914 -1.416 4.135 0.157 9.466 -0.56 9.466 -1.274 0 -0.354 -0.685 -0.666 -1.646 -0.751 -1.84 -0.162 -2.249 -1.004 -0.593 -1.22 2.183 -0.285 2.47 -0.732 0.64 -0.997 -2.527 -0.366 -2.699 -1.334 -0.306 -1.716 1.047 -0.168 1.905 -0.566 1.905 -0.886 0 -0.437 -0.534 -0.481 -2.156 -0.178 -1.185 0.221 -2.378 0.265 -2.65 0.097 -0.314 -0.194 -0.38 -0.007 -0.181 0.511 0.172 0.45 0.451 1.99 0.62 3.421 0.225 1.915 0.162 2.516 -0.235 2.27 -0.297 -0.184 -0.54 -0.584 -0.542 -0.89 0 -0.307 -0.7 -1.945 -1.554 -3.64l-1.553 -3.083 3.663 -0.048c3.964 -0.051 4.588 -0.234 4.588 -1.344 0 -0.572 -0.337 -0.663 -1.588 -0.428 -1.575 0.295 -4.022 -0.437 -4.022 -1.204 0 -0.216 1.263 -0.392 2.805 -0.392 2.995 0 3.375 -0.397 2.303 -2.4 -0.46 -0.86 -0.373 -0.924 1.052 -0.787 1.316 0.126 1.576 0.351 1.705 1.48 0.143 1.25 0.252 1.311 1.788 1.023 1.01 -0.19 1.891 -0.095 2.302 0.246 1.21 1.004 0.697 1.373 -1.905 1.373 -2.26 0 -2.57 0.113 -2.57 0.934 0 1.089 0.323 1.12 3.966 0.389 2.596 -0.521 2.76 -0.498 3.584 0.52 1.033 1.276 1.096 2.5 0.2 3.899 -0.365 0.57 -0.733 1.666 -0.818 2.437 -0.15 1.355 -0.084 1.408 1.939 1.552 2.363 0.168 3.281 0.73 3.281 2.011 0 1.05 -0.015 1.05 -3.272 0.177 -1.414 -0.38 -3.99 -0.693 -5.726 -0.696l-3.155 -0.005 -0.006 1.519c-0.008 1.915 -0.456 3.622 -0.95 3.622 -0.208 0 -0.524 -1.162 -0.701 -2.581zm7.148 -4.65c0.064 -0.05 0.17 -1.44 0.234 -3.09l0.118 -3 -1.825 -0.15c-2.227 -0.182 -4.018 0.224 -4.018 0.912 0 0.327 0.57 0.403 1.59 0.212 1.144 -0.215 1.8 -0.087 2.342 0.453 0.94 0.94 0.503 1.746 -0.733 1.354 -1.177 -0.373 -3.199 0.116 -3.199 0.774 0 0.323 0.651 0.39 1.835 0.19 1.558 -0.263 1.912 -0.164 2.353 0.66 0.58 1.083 0.57 1.088 -2.201 0.978 -1.535 -0.06 -1.987 0.09 -1.987 0.662 0 0.625 0.42 0.693 2.688 0.438 1.478 -0.167 2.74 -0.343 2.803 -0.393zm-3.41 -15.178c-0.245 -0.242 -1.552 -0.505 -2.905 -0.584 -3.457 -0.202 -3.292 -1.05 0.237 -1.218 2.627 -0.125 2.945 -0.25 3.196 -1.248 0.473 -1.886 0.053 -2.828 -1.221 -2.737 -0.635 0.046 -2.27 0.151 -3.635 0.234l-2.48 0.15 0.143 2.525c0.199 3.497 -0.772 3.68 -1.531 0.288 -0.847 -3.784 -1.243 -4.187 -3.495 -3.562 -3.12 0.866 -3.357 0.562 -0.702 -0.902 3.254 -1.793 4.24 -2.7 3.9 -3.588 -0.229 -0.596 -0.11 -0.624 0.732 -0.173 1.364 0.73 1.282 2.269 -0.154 2.923 -1.036 0.472 -1.079 0.589 -0.398 1.087 0.592 0.433 1.397 0.42 3.614 -0.055 3.953 -0.85 5.61 -0.796 6.519 0.21 0.954 1.053 0.994 3.321 0.096 5.47 -0.697 1.668 -1.146 1.945 -1.917 1.18zm-5.316 -3.266c-0.505 -0.32 -0.225 -0.604 1.165 -1.185 1.452 -0.607 2.07 -0.655 2.997 -0.232 1.133 0.516 1.14 0.551 0.265 1.192 -1.014 0.74 -3.418 0.863 -4.427 0.225zm8.143 -4.263c-1.837 -1.388 -3.475 -3.17 -3.495 -3.804 -0.006 -0.176 1.514 0.385 3.378 1.249 2.78 1.287 3.389 1.764 3.389 2.652 0 1.558 -1.127 1.525 -3.272 -0.097zm-7.406 -0.831c-0.962 -1.064 -0.991 -1.537 -0.073 -1.184 0.531 0.204 0.702 -0.085 0.702 -1.189 0 -1.439 -0.025 -1.454 -1.868 -1.16 -1.211 0.195 -2.114 0.094 -2.57 -0.285 -1.249 -1.036 -0.76 -1.404 1.867 -1.404 2.06 0 2.57 -0.15 2.57 -0.758 0 -0.623 0.127 -0.654 0.704 -0.175 0.452 0.376 1.358 0.48 2.534 0.292 2.114 -0.338 3.306 -0.005 3.306 0.925 0 0.47 -0.65 0.65 -2.337 0.65l-2.337 0 0 2.01c0 1.807 -0.602 3.132 -1.423 3.132 -0.166 0 -0.65 -0.384 -1.075 -0.854zm-1.922 -6.592c-0.297 -0.48 2.932 -3.304 3.779 -3.304 0.966 0 1.35 1.366 0.588 2.098 -0.816 0.786 -4.072 1.685 -4.367 1.206z"
        fill="#8f8f8f"
      />
      <path
        d="M0.455 49.105c0 -0.891 6.555 -45.102 6.701 -45.194 0.49 -0.31 13.116 -3.457 13.865 -3.457 0.807 0 13.475 3.18 13.899 3.489 0.06 0.044 1.58 9.951 3.376 22.017 1.797 12.065 3.349 22.41 3.448 22.988l0.182 1.052 -20.736 0c-20.12 0 -20.735 -0.027 -20.735 -0.895zm39.977 -1.559c-0.144 -0.835 -1.632 -10.762 -3.305 -22.059 -1.674 -11.297 -3.09 -20.586 -3.147 -20.642 -0.058 -0.056 -2.994 -0.88 -6.524 -1.83l-6.42 -1.729 -6.551 1.753c-3.603 0.964 -6.551 1.915 -6.551 2.114 0 0.4 -5.903 39.98 -6.322 42.393l-0.265 1.52 19.674 0 19.674 0 -0.263 -1.52zm-20.092 -4.324l-0.32 -2.57 -1.954 0.295c-1.074 0.162 -2.662 0.583 -3.529 0.935 -2.251 0.913 -4.897 0.816 -5.83 -0.215 -1.182 -1.307 -0.939 -1.633 0.98 -1.31 2.485 0.42 10.4 -0.677 10.4 -1.442 0 -0.373 -0.61 -0.6 -1.609 -0.6 -0.884 0 -1.725 -0.189 -1.867 -0.419 -0.315 -0.51 0.815 -0.984 2.345 -0.984 0.622 0 1.13 -0.263 1.13 -0.584 0.001 -0.36 -0.652 -0.584 -1.708 -0.584 -2.425 0 -2.57 -1.072 -0.196 -1.451 1.17 -0.187 1.905 -0.556 1.905 -0.955 0 -0.44 -0.342 -0.567 -1.052 -0.392 -0.579 0.142 -1.745 0.303 -2.591 0.36 -1.284 0.084 -1.501 0.256 -1.308 1.036 0.685 2.764 0.832 4.907 0.336 4.907 -0.29 0 -0.527 -0.3 -0.527 -0.667 0 -0.367 -0.728 -2.063 -1.617 -3.768l-1.616 -3.102 1.733 0.111c0.954 0.061 2.838 0.075 4.188 0.03 2.165 -0.073 2.454 -0.199 2.454 -1.077 0 -0.894 -0.184 -0.965 -1.821 -0.703 -1.436 0.23 -2.054 0.09 -2.922 -0.657l-1.1 -0.948 1.636 0.083c3.571 0.182 4.207 0.012 4.207 -1.127 0 -0.592 -0.263 -1.343 -0.585 -1.67 -0.47 -0.479 -0.267 -0.565 1.052 -0.444 1.408 0.13 1.657 0.336 1.788 1.481 0.143 1.25 0.252 1.312 1.788 1.024 1.01 -0.19 1.891 -0.095 2.302 0.246 1.21 1.004 0.697 1.373 -1.905 1.373 -2.314 0 -2.57 0.1 -2.57 0.998 0 0.93 0.151 0.974 2.22 0.637 4.27 -0.694 4.94 -0.589 5.652 0.882 0.564 1.165 0.558 1.549 -0.042 2.807 -0.382 0.801 -0.845 2.14 -1.028 2.974l-0.333 1.517 2.358 0c1.919 0 2.455 0.184 2.885 0.985 0.824 1.542 -0.04 1.913 -2.626 1.128 -1.27 -0.385 -3.834 -0.703 -5.698 -0.705 -3.257 -0.005 -3.389 0.038 -3.389 1.105 0 1.703 -0.542 4.031 -0.94 4.031 -0.195 0 -0.499 -1.157 -0.676 -2.57zm7.019 -4.602c0.577 -1.53 0.937 -5.34 0.548 -5.819 -0.68 -0.838 -5.565 -0.567 -5.86 0.326 -0.168 0.51 0.146 0.597 1.406 0.393 1.757 -0.285 2.548 0 2.79 1.006 0.111 0.466 -0.413 0.658 -1.909 0.697 -1.281 0.033 -2.143 0.294 -2.276 0.688 -0.167 0.498 0.193 0.566 1.677 0.316 1.619 -0.274 1.965 -0.18 2.41 0.65 0.493 0.922 0.402 0.97 -1.835 0.97 -1.855 0 -2.354 0.16 -2.354 0.755 0 0.646 0.388 0.707 2.688 0.422 1.478 -0.183 2.7 -0.365 2.715 -0.404zm-3.066 -15.202c0 -0.267 -1.308 -0.546 -2.921 -0.623 -3.782 -0.18 -3.784 -1.033 -0.003 -1.213 2.627 -0.125 2.945 -0.25 3.196 -1.248 0.455 -1.812 0.057 -2.823 -1.096 -2.786l-3.78 0.117 -2.735 0.083 0.386 2.442c0.228 1.442 0.209 2.62 -0.047 2.876 -0.456 0.456 -0.79 -0.22 -1.94 -3.916 -0.707 -2.27 -0.819 -2.313 -4.381 -1.666l-1.87 0.34 1.39 -0.766c4.618 -2.543 5.459 -3.256 5.06 -4.292 -0.32 -0.837 0.096 -0.792 0.996 0.108 1.06 1.06 0.904 2.012 -0.433 2.621 -1.075 0.49 -1.102 0.577 -0.35 1.103 0.65 0.455 1.595 0.423 4.63 -0.155 3.536 -0.674 3.903 -0.67 5.025 0.066 1.363 0.893 1.559 2.659 0.6 5.41 -0.526 1.51 -1.727 2.552 -1.727 1.5zm-5.593 -3.313c-0.545 -0.345 -0.402 -0.544 0.701 -0.974 1.76 -0.687 3.416 -0.71 4.069 -0.056 1.021 1.021 -3.306 1.956 -4.77 1.03zm9.091 -3.688c-1.817 -1.108 -4.555 -3.844 -4.201 -4.197 0.15 -0.15 0.948 0.07 1.773 0.49 0.826 0.42 2.3 1.123 3.278 1.563 1.328 0.598 1.741 1.04 1.636 1.75 -0.193 1.304 -0.828 1.405 -2.486 0.394zm-8.406 -1.473c-0.76 -0.841 -0.768 -0.935 -0.072 -0.935 0.554 0 0.774 -0.413 0.774 -1.454 0 -1.408 -0.053 -1.445 -1.63 -1.15 -1.638 0.308 -3.512 -0.307 -3.512 -1.152 0 -0.248 1.157 -0.45 2.57 -0.45 2.081 0 2.572 -0.148 2.572 -0.775 0 -0.715 0.065 -0.714 0.869 0.014 0.708 0.64 1.117 0.692 2.202 0.28 1.614 -0.614 3.472 -0.227 3.472 0.723 0 0.519 -0.584 0.692 -2.337 0.692l-2.337 0 0 2.01c0 1.806 -0.602 3.131 -1.423 3.131 -0.166 0 -0.682 -0.42 -1.148 -0.934zm-0.525 -8.121c1.96 -1.834 2.964 -2.116 3.408 -0.958 0.423 1.101 -0.756 1.986 -3.116 2.338l-2.104 0.314 1.812 -1.694z"
        fill="#707070"
      />
      <path
        d="M0.455 49.312c0 -1.064 6.584 -44.805 6.795 -45.148 0.103 -0.166 3.244 -1.101 6.98 -2.079l6.791 -1.776 6.895 1.784c3.792 0.98 6.928 1.802 6.97 1.825 0.148 0.082 6.702 44.22 6.702 45.139 0 0.932 -0.25 0.943 -20.567 0.943 -17.8 0 -20.566 -0.093 -20.566 -0.688zm39.998 -2c-0.155 -0.964 -1.637 -10.884 -3.292 -22.045 -1.656 -11.16 -3.211 -20.416 -3.456 -20.566 -0.244 -0.151 -3.25 -0.99 -6.68 -1.863l-6.237 -1.588 -6.293 1.727c-3.461 0.95 -6.348 1.781 -6.415 1.848 -0.11 0.11 -6.69 43.367 -6.69 43.98 0 0.143 8.852 0.26 19.672 0.26l19.673 0 -0.282 -1.753zm-20.094 -4.36l-0.315 -2.375 -1.959 0.33c-1.078 0.183 -2.777 0.62 -3.777 0.973 -2.523 0.89 -4.676 0.808 -5.6 -0.213 -1.208 -1.335 -0.933 -1.628 1.205 -1.286 2.675 0.428 10.174 -0.644 10.174 -1.455 0 -0.385 -0.595 -0.611 -1.609 -0.611 -2.32 0 -2.52 -0.862 -0.283 -1.22 1.194 -0.19 1.892 -0.55 1.892 -0.975 0 -0.46 -0.296 -0.58 -0.935 -0.376 -1.058 0.336 -2.805 -0.095 -2.805 -0.692 0 -0.217 0.842 -0.537 1.87 -0.71 1.114 -0.189 1.87 -0.574 1.87 -0.954 0 -0.494 -0.557 -0.576 -2.454 -0.361 -1.35 0.152 -2.53 0.341 -2.624 0.42 -0.093 0.079 0.084 1.2 0.394 2.492 0.904 3.769 0.36 3.642 -1.703 -0.398 -1.843 -3.607 -1.882 -3.77 -0.902 -3.77 0.564 0 1.254 0.228 1.533 0.508 0.366 0.366 0.596 0.366 0.822 0 0.173 -0.28 1.354 -0.508 2.624 -0.508 1.998 0 2.31 -0.126 2.31 -0.935 0 -0.807 -0.312 -0.935 -2.28 -0.935 -1.558 0 -2.483 -0.246 -2.922 -0.778 -0.585 -0.709 -0.476 -0.751 1.228 -0.48 2.607 0.414 3.974 -0.024 3.974 -1.274 0 -0.561 -0.263 -1.288 -0.585 -1.615 -0.47 -0.479 -0.267 -0.565 1.052 -0.444 1.468 0.135 1.638 0.294 1.653 1.553 0.01 0.771 0.17 1.365 0.358 1.32 2.547 -0.607 3.253 -0.632 3.85 -0.136 1.227 1.018 0.725 1.387 -1.888 1.387 -2.315 0 -2.57 0.1 -2.57 1 0 0.923 0.169 0.976 2.22 0.698 1.22 -0.166 2.782 -0.427 3.468 -0.58 1.06 -0.237 1.366 -0.052 2.024 1.22 0.735 1.42 0.725 1.613 -0.197 3.756 -1.471 3.42 -1.362 3.721 1.349 3.721 1.85 0 2.423 0.192 2.826 0.945 0.815 1.523 0.163 1.82 -2.46 1.122 -1.35 -0.36 -3.951 -0.656 -5.782 -0.659l-3.328 -0.005 -0.31 2.337c-0.17 1.285 -0.486 2.337 -0.702 2.337 -0.215 0 -0.532 -1.069 -0.706 -2.375zm6.083 -3.978c0.765 -0.206 1.087 -0.846 1.468 -2.915 0.34 -1.85 0.339 -2.836 -0.004 -3.258 -0.68 -0.838 -5.564 -0.567 -5.859 0.326 -0.169 0.51 0.148 0.597 1.427 0.39 1.537 -0.25 2.689 0.244 2.689 1.152 0 0.205 -0.947 0.374 -2.104 0.374 -1.633 0 -2.103 0.17 -2.103 0.762 0 0.61 0.326 0.71 1.633 0.497 1.174 -0.19 1.854 -0.044 2.424 0.523 0.743 0.74 0.643 0.797 -1.632 0.93 -1.74 0.101 -2.425 0.332 -2.425 0.818 0 0.706 2.513 0.93 4.486 0.4zm-2.149 -15.617c0 -0.259 -1.237 -0.467 -2.777 -0.467 -3.641 0 -4.055 -0.783 -0.618 -1.168 3.843 -0.431 3.863 -0.444 3.863 -2.62l0 -1.948 -2.169 0.297c-1.193 0.163 -2.995 0.297 -4.004 0.297 -1.528 0 -1.796 0.137 -1.598 0.818 0.458 1.569 0.479 4.092 0.036 4.314 -0.245 0.124 -0.76 -0.928 -1.146 -2.337 -0.987 -3.605 -1.22 -3.868 -3.125 -3.51 -0.889 0.166 -1.969 0.417 -2.4 0.558 -0.432 0.14 0.634 -0.62 2.37 -1.69 1.735 -1.07 3.155 -2.248 3.155 -2.62 0 -0.904 0.763 -0.86 1.118 0.065 0.472 1.23 0.337 1.54 -0.967 2.223 -1.188 0.623 -1.205 0.68 -0.342 1.142 0.652 0.35 2 0.286 4.762 -0.223 3.564 -0.657 3.944 -0.65 5.07 0.088 1.131 0.74 1.195 0.966 0.903 3.169 -0.173 1.304 -0.52 2.756 -0.772 3.226 -0.488 0.913 -1.359 1.16 -1.359 0.386zm-5.375 -3.253c-0.869 -0.356 -0.842 -0.42 0.381 -0.902 1.86 -0.733 4.06 -0.664 4.06 0.128 0 1.066 -2.615 1.522 -4.441 0.774zm8.88 -3.703c-1.562 -0.976 -4.836 -4.262 -4.245 -4.262 0.208 0 1.835 0.675 3.617 1.5 2.563 1.189 3.21 1.693 3.102 2.418 -0.19 1.274 -0.84 1.365 -2.473 0.344zm-8.239 -1.3c-0.5 -0.606 -0.512 -0.82 -0.057 -0.973 0.322 -0.109 0.585 -0.834 0.585 -1.612 0 -1.364 -0.06 -1.404 -1.63 -1.11 -1.638 0.307 -3.512 -0.308 -3.512 -1.153 0 -0.248 1.157 -0.45 2.57 -0.45 2.081 0 2.572 -0.148 2.572 -0.775 0 -0.699 0.088 -0.693 0.922 0.062 0.792 0.716 1.12 0.754 2.303 0.264 1.575 -0.653 3.318 -0.278 3.318 0.713 0 0.492 -0.62 0.67 -2.337 0.67l-2.337 0 0 1.667c0 1.734 -0.682 3.474 -1.361 3.474 -0.217 0 -0.683 -0.35 -1.036 -0.777zm-0.609 -8.337c1.736 -1.638 2.72 -2.009 3.214 -1.21 0.74 1.197 -1.605 2.846 -4.05 2.846 -0.727 0 -0.568 -0.312 0.836 -1.636z"
        fill="#4e4e4e"
      />
      <path
        d="M0.455 49.526c0 -0.714 6.544 -44.56 6.731 -45.1 0.09 -0.259 3.244 -1.286 7.01 -2.284l6.847 -1.814 6.65 1.76c3.657 0.967 6.793 1.89 6.97 2.049 0.288 0.262 6.925 43.55 6.925 45.175 0 0.595 -2.767 0.688 -20.567 0.688 -13.592 0 -20.566 -0.16 -20.566 -0.474zm40.188 -1.045c-0.023 -1.385 -6.45 -43.425 -6.672 -43.647 -0.376 -0.376 -11.909 -3.445 -12.946 -3.445 -0.946 0 -12.606 3.097 -12.948 3.44 -0.176 0.175 -6.687 42.847 -6.687 43.823 0 0.233 8.578 0.413 19.631 0.413 15.4 0 19.63 -0.126 19.622 -0.584zm-20.096 -4.908c-0.011 -2.653 -0.465 -3.08 -2.857 -2.686 -1.124 0.185 -2.753 0.629 -3.62 0.985 -2.673 1.1 -4.849 0.78 -5.716 -0.842 -0.462 -0.862 -0.37 -0.896 1.633 -0.595 2.826 0.424 10.1 -0.653 10.1 -1.495 0 -0.401 -0.577 -0.625 -1.609 -0.625 -2.3 0 -2.479 -0.794 -0.263 -1.169 1.206 -0.203 1.872 -0.564 1.872 -1.013 0 -0.523 -0.333 -0.624 -1.328 -0.406 -0.875 0.193 -1.515 0.067 -1.877 -0.37 -0.453 -0.545 -0.221 -0.712 1.328 -0.96 1.237 -0.198 1.877 -0.543 1.877 -1.012 0 -0.587 -0.431 -0.657 -2.454 -0.399 -1.35 0.173 -2.525 0.374 -2.612 0.447 -0.087 0.073 0.09 1.323 0.391 2.778 0.302 1.455 0.453 2.742 0.335 2.86 -0.118 0.117 -0.982 -1.403 -1.92 -3.378 -0.938 -1.975 -1.597 -3.7 -1.464 -3.833 0.132 -0.133 0.734 -0.016 1.338 0.259 0.662 0.302 1.357 0.334 1.754 0.083 0.362 -0.23 1.552 -0.42 2.645 -0.424 1.673 -0.006 1.987 -0.155 1.987 -0.942 0 -0.807 -0.312 -0.935 -2.28 -0.935 -1.535 0 -2.486 -0.248 -2.911 -0.76 -0.571 -0.689 -0.446 -0.73 1.325 -0.43 2.578 0.436 3.866 -0.004 3.866 -1.319 0 -0.574 -0.253 -1.296 -0.561 -1.604 -0.437 -0.437 -0.307 -0.56 0.584 -0.554 1.792 0.011 2.409 0.619 2.056 2.024 -0.34 1.36 0.157 1.577 1.708 0.747 1.12 -0.6 2.568 -0.205 2.955 0.805 0.231 0.602 0.038 0.695 -1.008 0.489 -2.124 -0.419 -3.865 0.114 -3.865 1.183 0 0.848 0.217 0.913 2.22 0.667 1.222 -0.151 2.791 -0.411 3.49 -0.579 1.115 -0.267 1.363 -0.105 2.058 1.354 0.725 1.52 0.73 1.753 0.051 2.788 -0.407 0.62 -0.883 1.896 -1.06 2.833l-0.319 1.704 2.083 0c1.424 0 2.328 0.27 2.856 0.855 1.145 1.265 0.951 1.614 -0.745 1.336 -5.71 -0.935 -9.289 -1.334 -9.893 -1.102 -0.43 0.165 -0.824 1.186 -1.016 2.629 -0.365 2.752 -1.124 3.157 -1.134 0.606zm7.39 -7.212c0.69 -3.708 0.365 -4.123 -3.234 -4.123 -2.081 0 -2.747 0.163 -2.747 0.674 0 0.457 0.63 0.721 1.95 0.818 2.79 0.206 2.951 1.313 0.193 1.313 -1.67 0 -2.143 0.168 -2.143 0.762 0 0.605 0.326 0.71 1.581 0.506 1.474 -0.24 2.626 0.27 2.626 1.162 0 0.206 -0.947 0.374 -2.103 0.374 -1.558 0 -2.104 0.182 -2.104 0.701 0 0.543 0.614 0.701 2.722 0.701l2.722 0 0.537 -2.888zm-3.644 -13.018c0 -0.25 -1.104 -0.456 -2.454 -0.46 -3.949 -0.012 -4.218 -0.773 -0.408 -1.156l3.33 -0.334 0 -2.12 0 -2.12 -2.169 0.298c-1.193 0.163 -2.965 0.297 -3.94 0.297l-1.77 0 0.265 2.571c0.346 3.351 -0.471 3.375 -1.218 0.036 -0.7 -3.126 -1.314 -3.685 -3.636 -3.305l-1.789 0.293 2.518 -1.509c1.384 -0.83 2.62 -1.9 2.745 -2.378 0.177 -0.68 0.368 -0.752 0.871 -0.335 0.698 0.58 0.88 1.823 0.266 1.823 -0.208 0 -0.772 0.287 -1.253 0.64 -0.847 0.619 -0.844 0.655 0.108 1.165 0.749 0.4 1.81 0.355 4.447 -0.19 3.884 -0.804 5.667 -0.46 6.19 1.19 0.422 1.327 -0.61 5.473 -1.44 5.792 -0.364 0.14 -0.663 0.05 -0.663 -0.198zm-5.344 -3.21c-1.204 -0.471 -0.42 -0.915 2.267 -1.283 1.73 -0.237 2.142 -0.158 2.142 0.412 0 0.417 -0.598 0.826 -1.46 0.999 -1.702 0.34 -1.76 0.337 -2.949 -0.128zm6.662 -5.639c-1.367 -1.276 -2.276 -2.313 -2.019 -2.306 1.214 0.034 6.56 3.074 6.695 3.807 0.312 1.686 -2.084 0.917 -4.676 -1.5zm-5.972 0.487c-0.28 -0.524 -0.302 -0.96 -0.05 -1.051 0.235 -0.085 0.58 -0.765 0.765 -1.511l0.337 -1.356 -2.03 0.272c-2.02 0.271 -3.716 -0.223 -3.716 -1.082 0 -0.248 1.255 -0.45 2.79 -0.45 2.459 0 2.754 -0.098 2.491 -0.819 -0.273 -0.75 -0.216 -0.746 0.687 0.046 0.84 0.738 1.218 0.787 2.578 0.338 1.797 -0.593 3.14 -0.271 3.14 0.754 0 0.48 -0.457 0.661 -1.52 0.603 -3.032 -0.166 -3.155 -0.1 -3.155 1.679 0 1.775 -0.686 3.474 -1.402 3.474 -0.24 0 -0.65 -0.403 -0.915 -0.897zm-0.628 -8.217c0.9 -0.9 1.908 -1.636 2.24 -1.636 0.739 0 1.202 1.065 0.77 1.766 -0.385 0.622 -2.608 1.506 -3.788 1.506 -0.684 0 -0.526 -0.332 0.778 -1.636z"
        fill="#2f2f2f"
      />
      <path
        d="M0.713 47.78c0.148 -0.964 1.68 -11.2 3.404 -22.747l3.135 -20.994 6.768 -1.805 6.768 -1.806 6.95 1.766c3.824 0.97 7.025 1.976 7.115 2.233 0.145 0.414 6.735 44.334 6.735 44.885 0 0.121 -9.258 0.22 -20.572 0.22l-20.572 0 0.269 -1.752zm39.94 0.614c0 -1.514 -6.14 -42.17 -6.5 -43.032 -0.306 -0.737 -1.741 -1.28 -6.76 -2.562l-6.372 -1.626 -6.371 1.626c-5.04 1.287 -6.45 1.822 -6.746 2.562 -0.342 0.855 -6.528 41.775 -6.518 43.119 0.003 0.458 4.244 0.584 19.635 0.584 16.756 0 19.632 -0.098 19.632 -0.671zm-20.1 -5.639c0 -1.983 -0.073 -2.103 -1.284 -2.105 -0.707 0 -2.797 0.446 -4.643 0.994 -3.658 1.084 -5.442 0.938 -6.216 -0.509 -0.459 -0.857 -0.355 -0.892 1.827 -0.634 1.272 0.15 4.008 0.01 6.081 -0.312 3.044 -0.474 3.769 -0.743 3.769 -1.4 0 -0.606 -0.286 -0.758 -1.127 -0.597 -0.62 0.119 -1.486 0.015 -1.924 -0.23 -0.638 -0.357 -0.415 -0.507 1.127 -0.753 1.304 -0.209 1.924 -0.544 1.924 -1.04 0 -0.562 -0.31 -0.665 -1.328 -0.442 -0.91 0.2 -1.517 0.065 -1.927 -0.43 -0.514 -0.619 -0.43 -0.722 0.588 -0.722 1.705 0 2.667 -0.46 2.667 -1.277 0 -0.545 -0.338 -0.642 -1.461 -0.417 -0.804 0.16 -1.988 0.292 -2.632 0.292 -1.27 0 -1.243 -0.35 -0.352 4.674 0.217 1.223 -0.178 0.692 -1.566 -2.103 -1.022 -2.057 -1.772 -3.825 -1.667 -3.93 0.104 -0.105 0.65 0.015 1.214 0.267 0.63 0.281 2.007 0.302 3.584 0.055 2.962 -0.465 3.347 -0.644 3.347 -1.561 0 -0.493 -0.602 -0.674 -2.248 -0.674 -1.236 0 -2.638 -0.285 -3.115 -0.634 -0.76 -0.556 -0.5 -0.628 2.131 -0.584 2.72 0.045 2.993 -0.037 2.945 -0.885 -0.03 -0.515 -0.21 -1.303 -0.401 -1.753 -0.263 -0.621 -0.123 -0.818 0.58 -0.818 1.255 0 1.996 0.996 1.67 2.244 -0.306 1.17 0.64 1.383 2.265 0.513 0.787 -0.42 1.141 -0.33 1.956 0.5l0.994 1.015 -1.712 -0.31c-2.221 -0.404 -3.663 0.073 -3.663 1.21 0 1.02 1.7 1.193 4.744 0.486 1.999 -0.465 2.511 -0.231 3.145 1.436 0.366 0.964 0.271 1.62 -0.438 3.01 -0.499 0.979 -0.907 2.26 -0.907 2.849 0 0.95 0.226 1.07 2.031 1.07 1.374 0 2.281 0.276 2.804 0.854 1.553 1.716 0.813 1.804 -4.835 0.578 -1.157 -0.251 -3.095 -0.466 -4.307 -0.477l-2.205 -0.02 -0.31 2.336c-0.386 2.91 -1.124 3.063 -1.124 0.234zm7.463 -6.644c0.498 -2.862 0.471 -3.195 -0.303 -3.773 -0.532 -0.397 -1.46 -0.536 -2.485 -0.372 -0.9 0.144 -2.004 0.264 -2.454 0.267 -0.48 0.003 -0.818 0.36 -0.818 0.863 0 0.702 0.355 0.851 1.94 0.818 1.163 -0.024 2.02 0.194 2.142 0.544 0.143 0.412 -0.429 0.585 -1.94 0.585 -1.79 0 -2.142 0.145 -2.142 0.885 0 0.767 0.214 0.838 1.6 0.525 0.999 -0.225 1.789 -0.172 2.103 0.143 0.808 0.807 0.585 1.294 -0.548 1.196 -2.116 -0.182 -3.155 0.067 -3.155 0.756 0 0.544 0.618 0.701 2.757 0.701l2.756 0 0.547 -3.138zm-3.722 -13.065c0 -0.215 -1.036 -0.318 -2.303 -0.23 -1.266 0.087 -2.686 -0.064 -3.155 -0.337 -0.865 -0.503 -0.669 -0.535 4.522 -0.744 1.012 -0.04 1.205 -0.315 1.437 -2.04 0.148 -1.096 0.106 -2.094 -0.093 -2.217 -0.199 -0.123 -2.036 -0.083 -4.084 0.087l-3.723 0.31 0.259 2.508c0.314 3.04 -0.564 3.474 -1.055 0.52 -0.181 -1.092 -0.624 -2.56 -0.983 -3.263 -0.642 -1.253 -0.632 -1.269 0.5 -0.838 0.755 0.287 2.332 0.24 4.565 -0.134 4.224 -0.71 5.432 -0.546 6.054 0.818 0.572 1.255 -0.419 5.441 -1.363 5.756 -0.318 0.106 -0.579 0.018 -0.578 -0.196zm-4.681 -2.992l-1.162 -0.305 1.371 -0.554c1.575 -0.636 3.15 -0.52 3.403 0.25 0.213 0.647 -2.026 1.024 -3.612 0.609zm-6.6 -4.185c1.38 -0.81 2.614 -1.88 2.744 -2.378 0.186 -0.709 0.376 -0.788 0.881 -0.37 0.354 0.294 0.644 0.717 0.644 0.94 0 0.656 -3.397 2.606 -5.154 2.957 -1.513 0.302 -1.453 0.223 0.885 -1.15zm13.804 -0.38c-1.91 -1.388 -3.253 -2.79 -2.94 -3.07 0.444 -0.402 6.266 2.859 6.406 3.589 0.239 1.239 -1.379 0.997 -3.466 -0.519zm-7.063 -0.504c-0.45 -0.719 -0.426 -0.944 0.12 -1.154 0.374 -0.143 0.68 -0.82 0.68 -1.504 0 -1.197 -0.079 -1.235 -2.095 -1.008 -1.37 0.154 -2.263 0.033 -2.582 -0.352 -0.377 -0.454 0.097 -0.66 2.101 -0.91 1.424 -0.178 2.468 -0.519 2.32 -0.757 -0.146 -0.238 -0.044 -0.433 0.228 -0.433 0.273 0 0.495 0.21 0.495 0.468 0 0.61 1.684 0.6 2.836 -0.017 0.627 -0.336 1.19 -0.33 1.839 0.017 1.503 0.805 1.115 1.478 -0.661 1.145 -2.385 -0.447 -3.459 0.037 -3.19 1.44 0.219 1.147 -0.658 3.958 -1.235 3.958 -0.164 0 -0.55 -0.401 -0.856 -0.893zm-0.816 -8.129c1.524 -1.831 3.018 -2.252 3.018 -0.85 0 1.131 -0.776 1.734 -2.785 2.165l-1.616 0.346 1.383 -1.66z"
        fill="#030303"
      />
    </svg>
  );
}

module.exports = piecePositionHoc(LanceA);
