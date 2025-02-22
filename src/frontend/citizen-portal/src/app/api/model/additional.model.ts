/**
 * Citizen API
 * Citizen API, for Citizen Portal frontend
 *
 * The version of the OpenAPI document: V0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Additional { 
    lawyerPresent: boolean;
    interpreterRequired: boolean;
    interpreterLanguage?: string;
    witnessPresent: boolean;
    numberOfWitnesses?: number;
    requestReduction: boolean;
    requestMoreTime: boolean;
    reductionReason?: string;
    moreTimeReason?: string;
}

