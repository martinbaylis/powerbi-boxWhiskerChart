/*
*
* Copyright (c) 2017 Jan Pieter Posthuma / DataScenarios
* 
* All rights reserved.
* 
* MIT License.
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/

module powerbi.extensibility.visual {

    export module BoxWhiskerEnums {
        export enum ChartOrientation {
            Horizontal,
            Vertical
        }

        export enum QuartileType {
            Exclusive,
            Inclusive
        }

        export enum WhiskerType {
            MinMax,
            Standard,
            IQR,
            Custom
        }
    
        export enum MarginType {
            Small,
            Medium,
            Large
        }

        export enum LabelOrientation {
            Horizontal,
            Diagonal,
            Vertical
        }
        export module ReferenceLine {
            export enum Style {
                dashed,
                solid,
                dotted
            }
            export enum Position {
                front,
                back
            }
            export enum LabelType {
                value,
                name,
                valueName,
            }
            export enum HPosition {
                left,
                right
            }
            export enum VPosition {
                above,
                under
            }
        }
    }
}